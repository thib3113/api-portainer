import PortainerSession from './PortainerSession/PortainerSession';

let main = async () => {
    const portainer = new PortainerSession({
        username: process.env.portainer_username as string,
        password: process.env.portainer_password as string,
        host: process.env.portainer_host as string
    });
    console.log(await portainer.settings.getAll());
};

main();
