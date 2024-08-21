import { Character } from "@/app/core/entities/Character";
import { Action } from "./types";

export const filterByFavs = (value: boolean): Action => ({
    type: 'FILTER_BY_FAVS',
    payload: value
})

export const addFavorite = (character: Character): Action => ({
    type: "ADD_FAVORITE",
    payload: character
})

export const removeFavorite = (characterId: number): Action => ({
    type: "REMOVE_FAVORITE",
    payload: characterId
})

export const setFilterSearch = (filter: string): Action => ({
    type: 'SET_FILTER_SEARCH',
    payload: filter
})