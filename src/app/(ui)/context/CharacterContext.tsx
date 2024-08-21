'use client'

import { createContext, useReducer, useContext, Dispatch } from "react";
import { characterReducer } from "./characterReducer";
import { Action, initialState, State } from "./types";

const CharacterStateContext = createContext<State>(initialState);
const CharacterDispatchContext = createContext<Dispatch<Action>>(() => null);

export const CharacterProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(characterReducer, initialState);
    return (
        <CharacterStateContext.Provider value={state}>
            <CharacterDispatchContext.Provider value={dispatch}>
                {children}
            </CharacterDispatchContext.Provider>
        </CharacterStateContext.Provider>
    )
}

export const useCharacterState = () => {
    const context = useContext(CharacterStateContext);
    if (!context) {
        throw new Error('useCharacterState debería ser utilizado dentro de un CharacterProvider');
    }
    return context;
}

export const useCharacterDispatch = () => {
    const context = useContext(CharacterDispatchContext);
    if (!context) {
        throw new Error('useCharacterDispatch debería ser utilizado dentro de un CharacterProvider');
    }
    return context;
}