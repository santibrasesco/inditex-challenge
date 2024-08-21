import { Character } from "../core/entities/Character";
import { Comic } from "../core/entities/Comic";

export interface CharacterRepository {
    getCharacters(filter?: string): Promise<Character[]>
    getCharacter(id: number): Promise<Character>;
    getCharacterComics(characterId: number): Promise<Comic[]>;
}