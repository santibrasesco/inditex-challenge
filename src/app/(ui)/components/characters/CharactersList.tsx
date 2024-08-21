'use client'

import { Character } from "@/app/core/entities/Character";
import { CharacterCard } from "./CharacterCard";
import styles from "./CharactersList.module.css";
import { useCharactersFilter } from "../../hooks/useCharactersFilter";
import { useCharacterState } from "../../context/CharacterContext";
import { useRouter } from "next/navigation";

export const CharactersList = ({ characters }: { characters: Character[] }) => {
    const { push } = useRouter();
    const { filterByFavs, filterSearch } = useCharacterState();
    const filteredList = useCharactersFilter(characters, filterSearch, filterByFavs);

    const navigate = (characterId: number) => {
        push(`/characters/${characterId}`);
    }

    return (
        <>
            <span>{filteredList.length} RESULTS</span>
            <div className={styles.container}>
                {filteredList.map(character => {
                    return (
                        <div key={character.id} onClick={() => navigate(character.id)} className={styles.item}>
                            <CharacterCard
                                character={character}
                            />
                        </div>
                    )
                })}
            </div>
        </>
    )
}