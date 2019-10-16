import {AxiosInstance} from "axios";

export default abstract class portainerObject {
    protected readonly instance: AxiosInstance;
    constructor(instance:AxiosInstance){
        this.instance = instance;
    }
}
