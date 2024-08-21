import { usePathname, useRouter } from "next/navigation";
import { Header } from "../(ui)/components/header/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { State } from "../(ui)/context/types";
import { Character } from "../core/entities/Character";
import { useCharacterState, useCharacterDispatch } from "../(ui)/context/CharacterContext";
import { filterByFavs, setFilterSearch } from "../(ui)/context/characterActions";


jest.mock('../(ui)/context/CharacterContext');
jest.mock('next/navigation');

describe('Header', () => {
    beforeEach(() => {

        (useRouter as jest.Mock).mockReturnValue({ replace: jest.fn() });

        const state: State = {
            filterSearch: '',
            filterByFavs: false,
            charactersFavorites: []
        };
        (useCharacterState as jest.Mock).mockReturnValue(state);
        (useCharacterDispatch as jest.Mock).mockReturnValue(jest.fn())
    })

    it('Navega a la búsqueda al hacer click en el logo', () => {

        (usePathname as jest.Mock).mockReturnValue('/another-route');

        render(<Header />);

        const icon = screen.getByTestId('logo-marvel');
        fireEvent.click(icon);

        expect(useRouter().replace).toHaveBeenCalledTimes(1);
        expect(useRouter().replace).toHaveBeenCalledWith('/characters');
        expect(useCharacterDispatch()).toHaveBeenCalledWith(filterByFavs(false));
        expect(useCharacterDispatch()).toHaveBeenCalledWith(setFilterSearch(''));
    })

    it('Navega a la búsqueda filtrando por favoritos al hacer click en el ícono de favoritos', () => {
        (usePathname as jest.Mock).mockReturnValue('/another-route');

        render(<Header />);

        const icon = screen.getByTestId('heart');
        fireEvent.click(icon);

        expect(useRouter().replace).toHaveBeenCalledTimes(1);
        expect(useRouter().replace).toHaveBeenCalledWith('/characters/favorites');
        expect(useCharacterDispatch()).toHaveBeenCalledWith(filterByFavs(true));
        expect(useCharacterDispatch()).toHaveBeenCalledWith(setFilterSearch(''));
    })

    it('Muestra la cantidad de favoritos', () => {
        const state: State = {
            filterSearch: '',
            filterByFavs: false,
            charactersFavorites: [
                new Character(1, 'name 1', 'desc 1', { path: 'path 1', extension: 'ext' }, true),
                new Character(2, 'name 2', 'desc 2', { path: 'path 2', extension: 'ext' }, true),
            ]
        };
        (useCharacterState as jest.Mock).mockReturnValue(state);

        render(<Header />);

        expect(screen.getByText('2'));
    })
})