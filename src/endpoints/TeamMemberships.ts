import portainerObject from '../objects/PortainerObject';

export default class TeamMemberships extends portainerObject {
    /**
     * Get team_memberships
     *
     */
    async getAll(): Promise<any> {
        const response = await this.instance.get(`/team_memberships`);
        return response.data;
    }

    /**
     * Get a specific team_membership
     *
     */
    // async getById(tagId: string): Promise<any> {
    //     const response = await this.instance.get(
    //         `/tags/${tagId}`,
    //     );
    //     return response.data;
    // }
}
