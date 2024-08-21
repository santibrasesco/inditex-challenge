export const config = {
    publicApiKey: process.env.NEXT_PUBLIC_API_KEY || '',
    privateApiKey: process.env.NEXT_PRIVATE_API_KEY || '',
    apiUrl: process.env.NEXT_API_URL || '',
    limitCharactersResults: process.env.NEXT_API_LIMIT_CHARACTERS_RESULTS || '',
    limitComicsResults: process.env.NEXT_API_LIMIT_COMICS_RESULTS || '',
    useApiMock: process.env.NEXT_API_USE_MOCK || ''
};