import { CharacterFilterSearch } from "../../components/characters/CharacterFilterSearch";
import { CharactersList } from "../../components/characters/CharactersList";

export default async function CharactersFavoritesPage() {

    return (
        <div className="layout-container">
            <h1>FAVORITES</h1>
            <CharacterFilterSearch filter="" />
            <CharactersList characters={[]} />
        </div>
    )
}
