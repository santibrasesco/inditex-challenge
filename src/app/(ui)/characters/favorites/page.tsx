import { Suspense } from "react";
import { CharacterFilterSearch } from "../../components/characters/CharacterFilterSearch";
import { CharactersList } from "../../components/characters/CharactersList";

export default function CharactersFavoritesPage() {

    return (
        <div className="layout-container">
            <h1>FAVORITES</h1>
            <Suspense>
                <CharacterFilterSearch filter="" />
            </Suspense>
            <CharactersList characters={[]} />
        </div>
    )
}
