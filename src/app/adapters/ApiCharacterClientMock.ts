import { promises as fs } from 'fs';
import { Character } from "../core/entities/Character";
import { Comic } from "../core/entities/Comic";
import { CharacterRepository } from "../ports/CharacterRepository";
import { ApiClient } from "./http/ApiClient";

export class ApiCharacterClientMock implements CharacterRepository {
    private apiClient;
    constructor() {
        this.apiClient = new ApiClient();
    }

    private getCharactersData = async (): Promise<Character[]> => {
        const file = await fs.readFile(process.cwd() + '/src/app/fixtures/charactersData.json', 'utf8');
        return JSON.parse(file).data.results;
    }

    private getComicsData = async (): Promise<Character[]> => {
        const file = await fs.readFile(process.cwd() + '/src/app/fixtures/comicsData.json', 'utf8');
        return JSON.parse(file).data.results;
    }

    async getCharacters(filter?: string): Promise<Character[]> {
        const data = await this.getCharactersData();

        return data.filter(d => d.name.toLowerCase().startsWith(filter?.toLowerCase() || '')).map(character =>
            new Character(character.id, character.name, character.description, character.thumbnail, false)
        );

    }
    async getCharacter(id: number): Promise<Character> {
        const character = (await this.getCharactersData())[0];
        return new Character(character.id, character.name, character.description, character.thumbnail, false);
    }

    async getCharacterComics(characterId: number): Promise<Comic[]> {
        const comics = await this.getComicsData();

        return comics.map(({ id, characterId, title, dates, thumbnail }: any) => {
            const saleDate = dates.find((d: { type: string }) => d.type === 'onsaleDate').date;
            return new Comic(id, characterId, title, saleDate, thumbnail);
        });
    }

}