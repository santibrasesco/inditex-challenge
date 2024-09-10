import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { CharacterFilterSearch } from "../(ui)/components/characters/CharacterFilterSearch"
import { usePathname, useRouter } from "next/navigation";
import { useCharacterDispatch, useCharacterState } from "../(ui)/context/CharacterContext";
import { initialState } from "../(ui)/context/types";
import { setFilterSearch } from "../(ui)/context/characterActions";

jest.mock("../(ui)/context/CharacterContext");
jest.mock('next/navigation');

describe('CharacterFilterSearch', () => {
    beforeEach(() => {
        (useRouter as jest.Mock).mockReturnValue({
            replace: jest.fn()
        });
        (usePathname as jest.Mock).mockReturnValue('characters');
        (useCharacterState as jest.Mock).mockReturnValue(initialState);
        (useCharacterDispatch as jest.Mock).mockReturnValue(jest.fn());
    })

    it('Setea el filtro de búsqueda al ingresar uno nuevo', async () => {
        render(<CharacterFilterSearch filter="" />)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'spider' } });

        await waitFor(() => {
            expect(useCharacterDispatch()).toHaveBeenCalledWith(setFilterSearch('spider'));
        })
    })

    it('Hace el replace al renderizar el componente para ejecutar la búsqueda sin filtro', async () => {
        render(<CharacterFilterSearch filter="" />)

        await waitFor(() => {
            expect(useRouter().replace).toHaveBeenCalledTimes(1);
            expect(useRouter().replace).toHaveBeenNthCalledWith(1, 'characters?');
        })
    })

    it('Reemplaza la query string de la URL con el filtro ingresado', async () => {

        render(<CharacterFilterSearch filter="" />)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'sp' } });

        await waitFor(() => {
            expect(useRouter().replace).toHaveBeenCalledTimes(2);
            expect(useRouter().replace).toHaveBeenNthCalledWith(1, 'characters?');
            expect(useRouter().replace).toHaveBeenNthCalledWith(2, 'characters?q=sp');
        })
    })

    it('No reemplaza la query string de la URL si se está filtrando sobre los favoritos', async () => {
        (useCharacterState as jest.Mock).mockReturnValue({
            ...initialState,
            filterByFavs: true
        });

        render(<CharacterFilterSearch filter="" />)

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'spider' } });

        await waitFor(() => {
            expect(useRouter().replace).toHaveBeenCalledTimes(0);
        })
    })

    it('Actualiza el filtro guardado al recibir un valor diferente', async () => {
        const initialFilter = 'initial filter';
        render(<CharacterFilterSearch filter={initialFilter} />)

        await waitFor(() => {
            expect(useCharacterDispatch()).toHaveBeenCalledWith(setFilterSearch(initialFilter));
        })
    })
})