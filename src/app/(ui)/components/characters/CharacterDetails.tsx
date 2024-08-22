'use client'

import { ToggleFavoriteCharacter } from "./ToggleFavoriteCharacter";
import styles from "./CharacterDetails.module.css";
import { Character } from "@/app/core/entities/Character";
import { useCharacterState } from "../../context/CharacterContext";
import Image from "next/image";

export const CharacterDetails = ({ character }: { character: Character }) => {
    const { charactersFavorites } = useCharacterState();
    character.favorite = charactersFavorites.some(c => c.id === character.id);

    return (
        <div className={styles.container}>
            <Image src={character.urlImage} className={styles.image} width={250} height={250} alt="Character image" />
            <div className={styles.details}>
                <div className={styles.header}>
                    <h1>{character.name}</h1>
                    <ToggleFavoriteCharacter
                        character={character}
                        width={25}
                        height={23}
                    />
                </div>
                <p>{character.description}</p>
            </div>
        </div>
    )
}