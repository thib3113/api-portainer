import portainerObject from '../objects/PortainerObject';
import Stack from './Stack';

export default class Stacks extends portainerObject {
    /**
     * Get stacks
     *
     */
    async getAll(): Promise<any> {
        const response = await this.instance.get(`/stacks`);
        return response.data;
    }

    /**
     * Get a specific stack
     *
     */
    async getById(stackId: string): Promise<Stack> {
        const response = await this.instance.get(`/stacks/${stackId}`);
        return new Stack(this.instance, response.data);
    }

    /**
     * create a stack, do not use it now
     *
     * @param params query params to send
     * @param data data to send
     */
    async create(params: any, data: any) {
        // const headers = {
        //     'Access-Control-Allow-Origin': '*',
        //     'Content-Type': 'multipart/form-data',
        //     'Authorization': 'Bearer ' + token
        // }
        // const data = {
        //     "Name": name,
        //     "SwarmID": "jpofkc0i9uo9wtx1zesuk649w",
        //     "StackFileContent": "version:\n volumes:\n services:\n image:cptactionhank/atlassian-jira-software",
        //     "RepositoryURL": "https://github.com/sajadam98/api-portainer",
        //     "ComposeFilePathInRepository": "src/dockercompose.yml"
        // }
        const response = await this.instance.post('stacks', {
            params,
            data,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    }
}

// import axios from 'axios';

// const getAll = async (host: string, token: string) => {
//     const url = host + '/api/stacks';
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data;
// };

// const getById = async (host: string, token: string, stackId: string) => {
//     const url = `${host}/api/stacks/${stackId}`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data;
// };

// const getStackDefinitionFile = async(host: string, token: string, stackId: string) => {
//     const url = `${host}/api/stacks/${stackId}/file`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data.StackFileContent;
// };

// const createStack = async (host: string, token: string, name: string) => {
//     const url = host + '/api/stacks?method=repository&type=1&endpointId=1';
//     const headers = {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'multipart/form-data',
//         Authorization: 'Bearer ' + token
//     };
//     const data = {
//         Name: name,
//         SwarmID: 'jpofkc0i9uo9wtx1zesuk649w',
//         StackFileContent: 'version:\n volumes:\n services:\n image:cptactionhank/atlassian-jira-software',
//         RepositoryURL: 'https://github.com/sajadam98/api-portainer',
//         ComposeFilePathInRepository: 'src/dockercompose.yml'
//     };
//     const response = await axios({ method: 'POST', url: url, data: data, headers: headers });
//     return response;
// };
// const deleteStack = async (host: string, token: string , stackId: string) => {
//     const url = `${host}/api/stacks/${stackId}`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.delete(url, { headers: headers});
//
//     return response.data;
// };

// export { getAll, getById, getStackDefinitionFile, createStack, deleteStack };
