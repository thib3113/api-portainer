import portainerObject from '../objects/PortainerObject';

export default class Teams extends portainerObject {
    /**
     * Get teams
     *
     */
    async getAll(): Promise<any> {
        const response = await this.instance.get(
            `/teams`,
        );
        return response.data;
    }

    /**
     * Get a specific team
     *
     */
    async getById(teamId: string): Promise<any> {
        const response = await this.instance.get(
            `/teams/${teamId}`,
        );
        return response.data;
    }
}


// import axios from 'axios';
//
// const getAll = async (host: string, token: string) => {
//     const url = host + '/api/teams';
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data;
// };
//
// const getById = async (host: string, token: string, teamId: string) => {
//     const url = `${host}/api/teams/${teamId}`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data;
// };

// const getTeamMemberships = async (host: string, token: string, teamId: string) => {
//     const url = `${host}/api/teams/${teamId}/memberships`;
//     const headers = {
//         'Authorization': 'Bearer ' + token
//     };
//
//     const response = await axios.get(url, { headers: headers });
//
//     return response.data;
// };

// export {
//     getAll, getById, getTeamMemberships
// };
