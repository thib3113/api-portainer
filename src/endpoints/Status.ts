import portainerObject from '../objects/PortainerObject';

export default class Status extends portainerObject {
    /**
     * Get status
     *
     */
    async get(): Promise<any> {
        const response = await this.instance.get(`/status`, { headers: { Authorization: false } });
        return response.data;
    }
}
