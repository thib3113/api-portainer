import portainerObject from '../objects/PortainerObject';
import { AxiosInstance } from 'axios';

export default class Stack extends portainerObject {
    private id: string;
    private getBaseEndPoint(): string {
        return `/stacks/${this.id}`;
    }

    constructor(instance: AxiosInstance, params: any) {
        super(instance);

        //do something with params
        this.id = params.id;
        console.log(params);
    }

    public async getDefinitionFile(): Promise<any> {
        const response = await this.instance.get(`${this.getBaseEndPoint()}/file`);
        return response.data.StackFileContent;
    }

    public async delete(): Promise<null> {
        const response = await this.instance.delete(this.getBaseEndPoint());

        return response.data;
    }
}
