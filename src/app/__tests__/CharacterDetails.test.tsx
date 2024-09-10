import { render, screen } from '@testing-library/react'
import { CharacterDetails } from "../(ui)/components/characters/CharacterDetails";
import { Character } from '../core/entities/Character';

describe('CharacterDetails', () => {
    it('Muestra los datos del personaje', () => {
        let character = new Character(1, 'test name', 'test description', { path: 'http://path_test', extension: 'jpg' }, false);

        render(<CharacterDetails character={character} />);

        expect(screen.getByText('test name')).toBeInTheDocument();
        expect(screen.getByText('test description')).toBeInTheDocument();
        expect(screen.getByRole('img').getAttribute('src')).toContain(encodeURIComponent('http://path_test.jpg'));
    })
})