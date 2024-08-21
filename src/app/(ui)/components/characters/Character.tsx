import { createCharacterService } from "@/app/adapters/factories/CharacterServiceFactory";
import { CharacterDetails } from "../../components/characters/CharacterDetails";

export default async function Character({ id }: { id: number }) {
    const service = createCharacterService();
    const character = JSON.parse(JSON.stringify(await service.getCharacter(id)));

    return (
        <CharacterDetails character={character} />
    )
}