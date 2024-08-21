'use client'

import { useState } from "react";
import styles from "./CharacterCard.module.css";
import { Character } from "@/app/core/entities/Character";
import { ToggleFavoriteCharacter } from "./ToggleFavoriteCharacter";
import { useCharacterState } from "../../context/CharacterContext";

export const CharacterCard = ({ character }: { character: Character }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { charactersFavorites } = useCharacterState();

    character.favorite = charactersFavorites.some(c => c.id === character.id);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className={styles.container}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img src={character.urlImage} className={styles.image} alt={`Character image ${character.name}`}></img>

            <div className={styles.details}>
                <div className={`${styles.contentDetails}`}>
                    <h4 className={styles.name}>{character.name}</h4>
                    <div className={styles.img}>
                        <ToggleFavoriteCharacter character={character} color={isHovered ? "#FFFF" : undefined} />
                    </div>
                </div>
            </div>
        </div>
    )
}