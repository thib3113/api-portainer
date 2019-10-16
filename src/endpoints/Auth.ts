import portainerObject from '../objects/PortainerObject';

export default class Auth extends portainerObject {
    /**
     * Authenticate against Portainer instance
     *
     * @param {string} username Name of user to authenticate
     * @param {string} password Password of user to authenticate
     */
    async authenticate(username: string, password: string): Promise<string> {
        try {
            const response = await this.instance.post(
                `/auth`,
                { Username: username, Password: password },
                { headers: { Authorization: false } }
            );
            return response.data.jwt;
        } catch (e) {
            console.error(e);
        }
        return '';
    }
}
