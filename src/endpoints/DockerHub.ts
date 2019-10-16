import portainerObject from '../objects/PortainerObject';

export default class DockerHub extends portainerObject {
    /**
     * Get Docker Hub connection info
     *
     */
    async getDockerHubInfo(): Promise<any> {
        const response = await this.instance.get(`/dockerhub`);
        return response.data;
    }
}
