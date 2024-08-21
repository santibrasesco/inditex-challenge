import { render, screen, waitFor } from "@testing-library/react";
import CharacterComponent from "../(ui)/components/characters/Character";
import { createCharacterService } from "../adapters/factories/CharacterServiceFactory";
import { Character } from '@/app/core/entities/Character';

jest.mock("../adapters/factories/CharacterServiceFactory")

describe('Character', () => {
    it('Realiza el personaje luego de hacer el fetch', async () => {
        const mockCharacter = new Character(1, 'Spider-Man', 'superhero', { path: 'path test', extension: 'jpg' }, false);
        const mockGetCharacter = jest.fn().mockResolvedValue(mockCharacter);
        (createCharacterService as jest.Mock).mockReturnValue({ getCharacter: mockGetCharacter });

        const jsxComponent = await CharacterComponent({ id: 1 });
        render(jsxComponent);

        await waitFor(() => {
            expect(screen.getByText('Spider-Man')).toBeInTheDocument();
        });

        expect(mockGetCharacter).toHaveBeenCalledWith(1);
        expect(mockGetCharacter).toHaveBeenCalledTimes(1);
    })
})