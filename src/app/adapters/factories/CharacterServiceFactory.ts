import { CharacterService } from "@/app/core/useCases/CharacterService";
import { createApiCharacterClient } from "./CharacterRepositoryFactory"

export const createCharacterService = () => {
    const apiClient = createApiCharacterClient();
    return new CharacterService(apiClient);
}