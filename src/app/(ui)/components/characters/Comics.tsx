import { createCharacterService } from "@/app/adapters/factories/CharacterServiceFactory";
import { CharacterComicList } from "./CharacterComicList";

export default async function Comics({ characterId }: { characterId: number }) {
    const service = createCharacterService();
    const comics = JSON.parse(JSON.stringify(await service.getCharacterComics(characterId)));

    return (
        <CharacterComicList comics={comics} />
    )
}