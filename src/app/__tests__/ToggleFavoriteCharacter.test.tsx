import { fireEvent, render, screen } from "@testing-library/react";
import { ToggleFavoriteCharacter } from "../(ui)/components/characters/ToggleFavoriteCharacter";
import { Action } from "../(ui)/context/types";
import { Dispatch } from "react";
import { Character } from "../core/entities/Character";
import { addFavorite, removeFavorite } from "../(ui)/context/characterActions";
import { useCharacterDispatch } from "../(ui)/context/CharacterContext";

jest.mock("../(ui)/context/CharacterContext");

describe('ToggleFavoriteCharacter', () => {

    it('Al clickear el icono hace el dispatch para agregar el personaje a favoritos', () => {
        const mockDispatch = jest.fn() as jest.MockedFunction<Dispatch<Action>>;
        (useCharacterDispatch as jest.Mock).mockReturnValue(mockDispatch);

        const isFavorite = false;
        let character = new Character(1, 'test name', 'test description', { path: 'path test', extension: 'jpg' }, isFavorite);

        render(<ToggleFavoriteCharacter character={character} />)

        const icon = screen.getByTestId('heart-empty');
        fireEvent.click(icon);

        expect(mockDispatch).toHaveBeenCalledWith(addFavorite(character));
    });

    it('Al clickear el icono hace el dispatch para remover el personaje de favoritos', () => {
        const mockDispatch = jest.fn() as jest.MockedFunction<Dispatch<Action>>;
        (useCharacterDispatch as jest.Mock).mockReturnValue(mockDispatch);

        const isFavorite = true;
        let character = new Character(1, 'test name', 'test description', { path: 'path test', extension: 'jpg' }, isFavorite);

        render(<ToggleFavoriteCharacter character={character} />)

        const icon = screen.getByTestId('heart');
        fireEvent.click(icon);

        expect(mockDispatch).toHaveBeenCalledWith(removeFavorite(character.id));
    })
})