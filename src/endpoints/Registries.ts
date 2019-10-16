import portainerObject from '../objects/PortainerObject';

export default class Registries extends portainerObject {
    /**
     * Get registries
     *
     */
    async getAll(): Promise<any> {
        const response = await this.instance.get(
            `/registries`,
        );
        return response.data;
    }

    /**
     * Get a specific registry
     *
     */
    async getById(registryId: string): Promise<any> {
        const response = await this.instance.get(
            `/registries/${registryId}`,
        );
        return response.data;
    }
}
