import { createHash } from "crypto";
import { Character } from "../core/entities/Character";
import { CharacterRepository } from "../ports/CharacterRepository";
import { config } from "../config/config";
import { ApiClient } from "./http/ApiClient";
import { Comic } from '../core/entities/Comic';

export class ApiCharacterClient implements CharacterRepository {

  private apiClient;
  constructor() {
    this.apiClient = new ApiClient();
  }

  private getHash = (ts: number, privateApiKey?: string, publicApiKey?: string): string => {
    const hash = `${ts}${privateApiKey}${publicApiKey}`;
    return createHash('md5').update(hash).digest('hex');
  }

  private getUrlWithCredentials = (url: string) => {
    const { privateApiKey, publicApiKey } = config;
    const ts = Date.now();
    const hash = this.getHash(ts, privateApiKey, publicApiKey);

    return `${url}?apikey=${config.publicApiKey}&ts=${ts}&hash=${hash}`;
  };

  async getCharacters(filter: string): Promise<Character[]> {
    try {
      let url = this.getUrlWithCredentials(config.apiUrl);
      url = `${url}&limit=${config.limitCharactersResults}`;

      if (filter) {
        url = `${url}&nameStartsWith=${filter}`;
      }

      let data: { results: Character[] } = (await this.apiClient.get(url)).data;

      return data.results.map(character =>
        new Character(character.id, character.name, character.description, character.thumbnail, false)
      );

    } catch (error) {
      console.log("ERROR API: ", error)
      throw new Error('Error al obtener los personajes');
    }

  }

  async getCharacter(characterId: number): Promise<Character> {
    const url = this.getUrlWithCredentials(`${config.apiUrl}/${characterId}`);
    const jsonData = (await this.apiClient.get(url)).data;
    const { id, name, description, thumbnail } = jsonData.results[0];

    return new Character(id, name, description, thumbnail, false);
  }

  async getCharacterComics(characterId: number): Promise<Comic[]> {
    const { apiUrl, limitComicsResults } = config;
    const urlComics = this.getUrlWithCredentials(`${apiUrl}/${characterId}/comics`);
    const url = `${urlComics}&orderBy=onsaleDate&limit=${limitComicsResults}`;

    const comics = (await this.apiClient.get(url)).data.results;

    return comics.map(({ id, characterId, title, dates, thumbnail }: any) => {
      const saleDate = dates.find((d: { type: string }) => d.type === 'onsaleDate').date;
      return new Comic(id, characterId, title, saleDate, thumbnail);
    });
  }
}