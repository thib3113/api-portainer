import portainerObject from '../objects/PortainerObject';
import { AxiosInstance } from 'axios';

export default class Team extends portainerObject {
    private id: string;

    private getBaseEndPoint(): string {
        return `/teams/${this.id}`;
    }

    constructor(instance: AxiosInstance, params: any) {
        super(instance);

        //do something with params
        this.id = params.id;
        console.log(params);
    }

    public async getMemberShips(): Promise<any> {
        const response = await this.instance.get(`${this.getBaseEndPoint()}/memberships`);
        return response.data;
    }
}
