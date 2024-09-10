import { fireEvent, render, screen } from "@testing-library/react";
import { CharactersList } from "../(ui)/components/characters/CharactersList"
import { Character } from "../core/entities/Character"
import { useCharacterState } from "../(ui)/context/CharacterContext";
import { State } from "../(ui)/context/types";
import { useRouter } from "next/navigation";

jest.mock('../(ui)/context/CharacterContext');

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

describe('CharactersList', () => {

    let characters: Character[];

    beforeEach(() => {
        const mockPush = jest.fn();
        (useRouter as jest.Mock).mockReturnValue({ push: mockPush });

        characters = [
            new Character(1, 'name 1', 'desc 1', { path: 'http://path1', extension: 'ext' }, false),
            new Character(2, 'name 2', 'desc 2', { path: 'http://path2', extension: 'ext' }, false),
            new Character(3, 'name 3', 'desc 3', { path: 'http://path3', extension: 'ext' }, false),
            new Character(4, 'name 4', 'desc 4', { path: 'http://path4', extension: 'ext' }, false)
        ];
    })


    it('Muestra la cantidad de personajes listados', () => {
        const state: State = {
            filterSearch: '',
            filterByFavs: false,
            charactersFavorites: []
        };
        (useCharacterState as jest.Mock).mockReturnValue(state);

        render(<CharactersList characters={characters} />);

        expect(screen.getByText('4 RESULTS')).toBeInTheDocument();
    })

    it('Renderiza la lista de personajes', () => {
        const state: State = {
            filterSearch: '',
            filterByFavs: false,
            charactersFavorites: []
        };
        (useCharacterState as jest.Mock).mockReturnValue(state);

        render(<CharactersList characters={characters} />);

        expect(screen.getByText('name 1')).toBeInTheDocument();
        expect(screen.getByText('name 2')).toBeInTheDocument();
        expect(screen.getByText('name 3')).toBeInTheDocument();
        expect(screen.getByText('name 4')).toBeInTheDocument();
    })

    it('Muestra solo los personajes favoritos al filtrar por favorito', () => {
        characters[0].favorite = true;
        characters[1].favorite = true;

        const state: State = {
            filterSearch: '',
            filterByFavs: true,
            charactersFavorites: characters.filter(c => c.favorite)
        };

        (useCharacterState as jest.Mock).mockReturnValue(state);

        render(<CharactersList characters={characters} />);

        expect(screen.getByText('2 RESULTS')).toBeInTheDocument();
        expect(screen.getByText('name 1')).toBeInTheDocument();
        expect(screen.getByText('name 2')).toBeInTheDocument();
    })

    it('Navega al detalle del personaje al clickearlo', () => {
        render(<CharactersList characters={characters} />);

        const characterCard = screen.getByRole('img', { name: 'Character image name 1' });
        fireEvent.click(characterCard);

        expect(useRouter().push).toHaveBeenCalledWith('/characters/1');
    })
})