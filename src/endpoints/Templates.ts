import portainerObject from '../objects/PortainerObject';

export default class Templates extends portainerObject {
    /**
     * Get templates
     *
     */
    async getAll(): Promise<any> {
        const response = await this.instance.get(
            `/templates`,
        );
        return response.data;
    }

    /**
     * Get a specific template
     *
     */
    async getById(templateId: string): Promise<any> {
        const response = await this.instance.get(
            `/templates/${templateId}`,
        );
        return response.data;
    }
}

// import axios from 'axios';
//
// const getAll = async (host: string, token: string) => {
//     const url = host + '/api/templates';
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data;
// };
//
// const getById = async (host: string, token: string, templateId: string) => {
//     const url = `${host}/api/templates/${templateId}`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data;
// };
//
// export {
//     getAll, getById
// };
