import PortainerSession from '../src/PortainerSession/PortainerSession';

describe('test configurations', () => {
    it('should accept username and password', () => {
        new PortainerSession({
            username: 'aaaa',
            password: 'bbbb',
            host: 'http://localhost'
        });
    });

    it('should accept getAuth function', () => {
        new PortainerSession({
            getAuth: (): IAuth => ({ username: 'aaaa', password: 'bbbb' }),
            host: 'http://localhost'
        });
    });

    it('should accept correct url', () => {
        new PortainerSession({
            username: 'aaaa',
            password: 'bbbb',
            host: 'http://localhost'
        });
        new PortainerSession({
            username: 'aaaa',
            password: 'bbbb',
            host: 'https://localhost'
        });
        new PortainerSession({
            username: 'aaaa',
            password: 'bbbb',
            host: 'https://localhost:8080'
        });
        new PortainerSession({
            username: 'aaaa',
            password: 'bbbb',
            host: 'https://localhost:8080/'
        });
    });

    it('should refuse incorrect url', () => {
        expect(() => {
            new PortainerSession({
                username: 'aaaa',
                password: 'bbbb',
                host: 'localhost'
            });
        }).toThrow();
        expect(() => {
            new PortainerSession({
                username: 'aaaa',
                password: 'bbbb',
                host: 'localhost:444'
            });
        }).toThrow();
        expect(() => {
            new PortainerSession({
                username: 'aaaa',
                password: 'bbbb',
                host: 'ftp://localhost'
            });
        }).toThrow();
        expect(() => {
            new PortainerSession({
                username: 'aaaa',
                password: 'bbbb',
                host: 'https://'
            });
        }).toThrow();
    });
});

describe('test session', () => {
    it('should init session', async () => {
        new PortainerSession({
            username: process.env.portainer_username as string,
            password: process.env.portainer_password as string,
            host: process.env.portainer_host as string
        });
        expect(true).toBeTruthy();
    });

    it('should test connexion', async () => {
        const portainer = new PortainerSession({
            username: process.env.portainer_username as string,
            password: process.env.portainer_password as string,
            host: process.env.portainer_host as string
        });
        expect(await portainer.settings.getAll()).toBeDefined();
    });
});
