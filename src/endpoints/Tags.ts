import portainerObject from '../objects/PortainerObject';

export default class Services extends portainerObject {
    /**
     * Get tags
     *
     */
    async getAll(): Promise<any> {
        const response = await this.instance.get(`/tags`);
        return response.data;
    }

    /**
     * Get a specific tag
     *
     */
    async getById(tagId: string): Promise<any> {
        const response = await this.instance.get(`/tags/${tagId}`);
        return response.data;
    }
}
