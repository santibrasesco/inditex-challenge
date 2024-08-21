'use client'

import { Character } from "@/app/core/entities/Character"
import { Heart } from "../icons/Heart"
import { HeartEmpty } from "../icons/HeartEmpty"
import { MouseEvent } from "react"
import { useCharacterDispatch } from "../../context/CharacterContext"
import { addFavorite, removeFavorite } from "../../context/characterActions"

export const ToggleFavoriteCharacter = ({ character, color, width = 17, height = 15 }: { character: Character, color?: string, width?: number, height?: number }) => {
    const dispatch = useCharacterDispatch();

    const handleToggle = (evt: MouseEvent) => {
        evt.stopPropagation();
        evt.preventDefault();

        if (character.favorite) {
            dispatch(removeFavorite(character.id));
        } else {
            dispatch(addFavorite(character));
        }
    }

    return (
        <>
            {character.favorite ?
                <Heart width={width} height={height} onClick={handleToggle} fill={color} />
                :
                <HeartEmpty width={width} height={height} onClick={handleToggle} />
            }
        </>
    )
}