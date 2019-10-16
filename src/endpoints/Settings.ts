import portainerObject from '../objects/PortainerObject';

export default class Settings extends portainerObject {
    async getAll(): Promise<any> {
        const response = await this.instance.get(`/settings`);

        return response.data;
    }

    async getPublic(): Promise<any> {
        const response = await this.instance.get(`/settings/public`);

        return response.data;
    }
}
