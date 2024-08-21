import { render, screen, waitFor } from "@testing-library/react";
import Comics from "../(ui)/components/characters/Comics";
import { createCharacterService } from "../adapters/factories/CharacterServiceFactory";
import { Comic } from "../core/entities/Comic";

jest.mock("../adapters/factories/CharacterServiceFactory")

describe('Comic', () => {
    it('Realiza los comics del personaje luego de hacer el fetch', async () => {

        const mockGetComics = jest.fn().mockResolvedValue([
            new Comic(1, 10, 'Comic title 1', 1704063600000, { path: 'comic path 2', extension: 'ext' }),
            new Comic(2, 10, 'Comic title 2', 1704063600000, { path: 'comic path 1', extension: 'ext' })
        ]);
        (createCharacterService as jest.Mock).mockReturnValue({ getCharacterComics: mockGetComics });

        const jsxComponent = await Comics({ characterId: 10 });
        render(jsxComponent);

        await waitFor(() => {
            expect(screen.getByText('Comic title 1')).toBeInTheDocument();
            expect(screen.getByText('Comic title 2')).toBeInTheDocument();
        });

        expect(createCharacterService().getCharacterComics).toHaveBeenCalledWith(10);
        expect(createCharacterService().getCharacterComics).toHaveBeenCalledTimes(1);
    })
})