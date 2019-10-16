import { AxiosInstance } from 'axios';

export default abstract class PortainerObject {
    protected readonly instance: AxiosInstance;

    // noinspection TypeScriptAbstractClassConstructorCanBeMadeProtected
    public constructor(instance: AxiosInstance) {
        this.instance = instance;
    }
}
