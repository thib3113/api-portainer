import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/endpoints/1/docker/services';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, serviceId: string) => {
    const url = `${host}/api/endpoints/1/docker/services/${serviceId}`;
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

// const getStackDefinitionFile = async(host: string, token: string, stackId: string) => {
//     const url = `${host}/api/stacks/${stackId}/file`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };

//     const response = await axios.get(url, { headers: headers });

//     return response.data.StackFileContent;
// };

// const createStack = async (host: string, token: string , name: string) => {
//     const url = host + '/api/stacks?method=repository&type=1&endpointId=1';
//     const headers = {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'multipart/form-data',
//         'Authorization': 'Bearer ' + token
//     }
//     const data = {
//         "Name": name,
//         "SwarmID": "jpofkc0i9uo9wtx1zesuk649w",
//         "StackFileContent": "version:\n volumes:\n services:\n image:cptactionhank/atlassian-jira-software",
//         "RepositoryURL": "https://github.com/sajadam98/api-portainer",
//         "ComposeFilePathInRepository": "src/dockercompose.yml"
//       }
//     const response = await axios.post(url, {data: data, headers: headers })
//     return response;
// }
// const deleteStack = async (host: string, token: string , stackId: string) => {
//     const url = `${host}/api/stacks/${stackId}`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };

//     const response = await axios.delete(url, { headers: headers});

//     return response.data;
// };

export {
    getAll, getById, 
    // getStackDefinitionFile , createStack , deleteStack
};
