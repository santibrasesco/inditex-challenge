import { CharacterRepository } from "@/app/ports/CharacterRepository";
import { Character } from "../entities/Character";
import { Comic } from "../entities/Comic";

export class CharacterService {

    private characterRespository: CharacterRepository;

    constructor(characterRepository: CharacterRepository) {
        this.characterRespository = characterRepository;
    }

    async getCharacters(filter?: string): Promise<Character[]> {
        return this.characterRespository.getCharacters(filter);
    }

    async getCharacter(id: number): Promise<Character> {
        return this.characterRespository.getCharacter(id);
    }

    async getCharacterComics(idCharacter: number): Promise<Comic[]> {
        return this.characterRespository.getCharacterComics(idCharacter);
    }
}