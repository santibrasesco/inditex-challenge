import { Action, initialState, State } from "./types";

export const characterReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'SET_FILTER_SEARCH':
            return {
                ...state,
                filterSearch: action.payload
            }
        case 'FILTER_BY_FAVS':
            return {
                ...state,
                filterByFavs: action.payload
            }
        case "ADD_FAVORITE":
            return {
                ...state,
                charactersFavorites: [...state.charactersFavorites, action.payload]
            }
        case "REMOVE_FAVORITE":
            return {
                ...state,
                charactersFavorites: state.charactersFavorites.filter(c => c.id !== action.payload)
            }
        default:
            return state;
    }
}
