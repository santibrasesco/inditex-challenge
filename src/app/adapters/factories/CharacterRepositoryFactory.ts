import { ApiCharacterClient } from "../ApiCharacterClient"
import { ApiCharacterClientMock } from "../ApiCharacterClientMock";
import { config } from "../../config/config";

export const createApiCharacterClient = () => {

    if (config.useApiMock === 'true') {
        // Se configura el uso del mock debido a que la API de Marvel esta muy lenta 
        // en responder dificultando el uso de la aplicación.
        return new ApiCharacterClientMock();
    }

    return new ApiCharacterClient();
}