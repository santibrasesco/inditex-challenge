import { Character } from "../core/entities/Character";
import { Comic } from "../core/entities/Comic";
import { CharacterRepository } from "../ports/CharacterRepository";
import { comicsMock } from '../fixtures/comicsMock';
import { charactersMock } from '../fixtures/charactersMock';

export class ApiCharacterClientMock implements CharacterRepository {

    private getCharactersData = async (): Promise<any[]> => {
        return Promise.resolve(charactersMock.data.results);
    }

    private getComicsData = async (): Promise<any[]> => {
        return Promise.resolve(comicsMock.data.results);
    }

    async getCharacters(filter?: string): Promise<Character[]> {
        const data = await this.getCharactersData();

        return data.filter(d => d.name.toLowerCase().startsWith(filter?.toLowerCase() || '')).map(character =>
            new Character(character.id, character.name, character.description, character.thumbnail, false)
        );

    }
    async getCharacter(id: number): Promise<Character> {
        const character = (await this.getCharactersData()).find(c => c?.id === +id);
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