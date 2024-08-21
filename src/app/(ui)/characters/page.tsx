import { Suspense } from "react";
import { Characters } from "../../(ui)/components/characters/Characters";
import { CharacterFilterSearch } from "../components/characters/CharacterFilterSearch";
import { Spinner } from "../components/common/Spinner";

export default async function CharactersPage({ searchParams }: { searchParams: { q: string } }) {
    const filter = searchParams.q || '';

    return (
        <div className="layout-container">
            <CharacterFilterSearch filter={filter} />
            <Suspense key={Math.random()} fallback={<Spinner />}>
                <Characters filter={filter} />
            </Suspense>
        </div>
    )
}
