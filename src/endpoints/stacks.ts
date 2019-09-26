import axios from 'axios';

const getAll = async (host: string, token: string) => {
    const url = host + '/api/stacks';
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getById = async (host: string, token: string, stackId: string) => {
    const url = `${host}/api/stacks/${stackId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data;
};

const getStackDefinitionFile = async(host: string, token: string, stackId: string) => {
    const url = `${host}/api/stacks/${stackId}/file`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.get(url, { headers: headers });

    return response.data.StackFileContent;
};

const createStack = async (host: string, token: string , data: Object) => {
    const url = host + '/api/stacks';
    const headers = {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.post(url, {headers: headers}, {data: data} );

    return response.data;
};
const deleteStack = async (host: string, token: string , stackId: string) => {
    const url = `${host}/api/stacks/${stackId}`;
    const headers = {
        'Authorization': 'Bearer ' + token
    };

    const response = await axios.delete(url, { headers: headers});

    return response.data;
};

export {
    getAll, getById, getStackDefinitionFile , createStack , deleteStack
};
