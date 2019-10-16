import portainerObject from '../objects/PortainerObject';

/**
 * usage ? useless ? duplicate of Endpoints ?
 */
export default class EndpointGroups extends portainerObject {
    /**
     * Get endpoints
     *
     */
    async getAll(): Promise<any> {
        const response = await this.instance.get(
            `/endpoints`,
        );
        return response.data;
    }

    /**
     * Get a specific endpoint
     *
     */
    async getById(endpointGroupId: string): Promise<any> {
        const response = await this.instance.get(
            `/endpoints/${endpointGroupId}`,
        );
        return response.data;
    }


}
