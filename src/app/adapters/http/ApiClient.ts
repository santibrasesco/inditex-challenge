
export class ApiClient {

    async get(url: string, queryParams = ''): Promise<any> {
        try {
            const response = await fetch(url + queryParams);
            return await response.json();
        } catch (error: any) {
            console.error('Error message:', error.message);
            throw new Error(error.message);
        }
    }
}