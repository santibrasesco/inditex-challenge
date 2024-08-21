import { Suspense } from "react";
import Character from "../../components/characters/Character";
import { Spinner } from "../../components/common/Spinner";
import Comic from "../../components/characters/Comics";

export default async function CharacterPage({ params }: { params: { id: number } }) {
    return (
        <>
            <Suspense key={Math.random()} fallback={<Spinner />}>
                <Character id={params.id} />
            </Suspense>
            <Suspense key={Math.random()} fallback={<Spinner />}>
                <Comic characterId={params.id} />
            </Suspense>
        </>
    )
}