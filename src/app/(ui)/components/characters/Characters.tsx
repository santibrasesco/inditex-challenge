import { Character } from "@/app/core/entities/Character"
import { createCharacterService } from "@/app/adapters/factories/CharacterServiceFactory"
import { CharactersList } from "./CharactersList"

export const Characters = async ({ filter }: { filter: string }) => {
    const service = createCharacterService();
    let characters: Character[] = [];

    characters = await service.getCharacters(filter);
    characters = characters.map(c => JSON.parse(JSON.stringify(c)));

    return (
        <CharactersList characters={characters} />
    )
}