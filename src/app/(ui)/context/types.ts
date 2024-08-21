import { Character } from "@/app/core/entities/Character";

export type Action =
    | { type: 'ADD_FAVORITE', payload: Character }
    | { type: 'REMOVE_FAVORITE', payload: number }
    | { type: 'FILTER_BY_FAVS', payload: boolean }
    | { type: 'SET_FILTER_SEARCH', payload: string }

export interface State {
    filterSearch: string,
    filterByFavs: boolean,
    charactersFavorites: Character[]
};

export const initialState: State = {
    filterSearch: '',
    filterByFavs: false,
    charactersFavorites: []
};
