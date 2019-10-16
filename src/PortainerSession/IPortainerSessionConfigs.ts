interface IPortainerSessionConfigs extends Partial<IAuth>{
    host: string,
    getAuth?: () => IAuth
}
