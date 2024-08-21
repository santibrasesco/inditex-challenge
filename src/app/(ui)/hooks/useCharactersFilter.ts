import { Character } from "@/app/core/entities/Character";
import { useCharacterState } from "../context/CharacterContext";

export const useCharactersFilter = (characters: Character[], filter: string, filterByFavs: boolean) => {
    const { charactersFavorites } = useCharacterState();
    let charactersList = [...characters];

    if (filterByFavs) {
        charactersList = charactersFavorites.filter(f => !filter || f.name.toLowerCase().startsWith(filter.toLowerCase()));
    }

    return charactersList;
}
