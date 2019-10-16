import axios, { AxiosInstance } from 'axios';
import Auth from '../endpoints/Auth';
import JWTToken from '../objects/JWTToken';
import Settings from '../endpoints/Settings';
import DockerHub from '../endpoints/DockerHub';
import Endpoints from '../endpoints/Endpoints';
import Registries from '../endpoints/Registries';
import Services from '../endpoints/Services';
import Stacks from '../endpoints/Stacks';
import Status from '../endpoints/Status';
import Tags from '../endpoints/Tags';
import Teams from '../endpoints/Teams';
import TeamMemberships from '../endpoints/TeamMemberships';
import Templates from '../endpoints/Templates';
import Users from '../endpoints/Users';

/**
 * A session retrieves a token upon creation and uses it for subsequent requests
 * against the Portainer API.
 */

export default class PortainerSession {
    private priv: IAuth & {
        getAuth?: () => IAuth;
    } = {};

    private readonly host: string;
    private token: JWTToken | undefined;
    private readonly axiosInstance: AxiosInstance;

    public auth: Auth;
    public settings: Settings;
    private dockerHub: DockerHub;
    private endpoints: Endpoints;
    private registries: Registries;
    private services: Services;
    private stacks: Stacks;
    private status: Status;
    private tags: Services;
    private teamMemberships: TeamMemberships;
    private teams: Teams;
    private templates: Templates;
    private users: Users;

    private async getToken(): Promise<string> {
        const { username, password } = this.priv.getAuth
            ? this.priv.getAuth()
            : { username: this.priv.username as string, password: this.priv.password as string };
        return this.token && this.token.isValid ? this.token.toString() : await this._getToken(username as string, password as string);
    }

    private async _getToken(username: string, password: string): Promise<string> {
        try {
            const token = await this.auth.authenticate(username, password);
            this.token = new JWTToken(token);
            return token;
        } catch (e) {
            throw new Error('fail to get JWT token');
        }
    }

    private checkUrl(portainerUrl: string): string {
        if (!portainerUrl) {
            throw new Error('Portainer Host is needed');
        }

        const myURL = new URL(portainerUrl);
        if (!myURL.protocol || !myURL.hostname) {
            throw new Error('Portainer host seems invalid');
        }

        if (!myURL.protocol.match(/https?/)) {
            throw new Error('Portainer host need to start with https?');
        }

        return myURL.toString().slice(0, -1);
    }

    public constructor(params: IPortainerSessionConfigs) {
        if (!params.host) {
            throw new Error('params.host is needed');
        }

        this.host = this.checkUrl(params.host);

        if (params.username && params.password) {
            this.priv.username = params.username;
            this.priv.password = params.password;
        } else if (params.getAuth) {
            this.priv.getAuth = params.getAuth;
        } else {
            throw new Error('you need to pass username/password or getAuth function');
        }

        this.axiosInstance = axios.create({
            baseURL: `${this.host}/api`
        });

        this.axiosInstance.interceptors.request.use(
            async config => {
                //set Bearer
                if (config.headers.Authorization !== false) {
                    config.headers.Authorization = `Bearer ${await this.getToken()}`;
                } else {
                    delete config.headers.Authorization;
                }
                return config;
            },
            function(err) {
                return Promise.reject(err);
            }
        );

        //init endpoints
        this.auth = new Auth(this.axiosInstance);
        this.dockerHub = new DockerHub(this.axiosInstance);
        this.endpoints = new Endpoints(this.axiosInstance);
        this.registries = new Registries(this.axiosInstance);
        this.services = new Services(this.axiosInstance);
        this.settings = new Settings(this.axiosInstance);
        this.stacks = new Stacks(this.axiosInstance);
        this.status = new Status(this.axiosInstance);
        this.tags = new Tags(this.axiosInstance);
        this.teamMemberships = new TeamMemberships(this.axiosInstance);
        this.teams = new Teams(this.axiosInstance);
        this.templates = new Templates(this.axiosInstance);
        this.users = new Users(this.axiosInstance);
    }

    //
    // Settings
    //
    /*
    public getSettings() {
        return settings.getAll(this.host, this.token);
    }

    public getPublicSettings() {
        return settings.getPublic(this.host);
    }

    public static getPublicSettings(host: string) {
        return settings.getPublic(host);
    }

    //
    // Dockerhub
    //

    public getDockerhubInfo() {
        return dockerhub.getDockerhubInfo(this.host, this.token);
    }

    //
    // Endpoint Groups
    //

    public getEndpointGroups() {
        return endpointGroups.getAll(this.host, this.token);
    }

    public getEndpointGroupById(id: string) {
        return endpointGroups.getById(this.host, this.token, id);
    }

    //
    // Endpoints
    //

    public getEndpoints() {
        return endpoints.getAll(this.host, this.token);
    }

    public getEndpointById(id: string) {
        return endpoints.getById(this.host, this.token, id);
    }

    //
    // Registries
    //

    public getRegistries() {
        return registries.getAll(this.host, this.token);
    }

    public getRegistryById(id: string) {
        return registries.getById(this.host, this.token, id);
    }

    //
    // Stacks
    //

    public getStacks() {
        return stacks.getAll(this.host, this.token);
    }

    public getStackById(id: string) {
        return stacks.getById(this.host, this.token, id);
    }

    public getStackDefinitionFile(id: string) {
        return stacks.getStackDefinitionFile(this.host, this.token, id);
    }

    //
    // Status
    //

    public getStatus() {
        return status.get(this.host);
    }

    public static getStatus(host: string) {
        return status.get(host);
    }

    //
    // Tags
    //

    public getTags() {
        return tags.getAll(this.host, this.token);
    }

    public getTagById(id: string) {
        return tags.getById(this.host, this.token, id);
    }

    //
    // Team memberships
    //

    public getTeamMemberships() {
        return teamMemberships.getAll(this.host, this.token);
    }

    //
    // Teams
    //

    public getTeams() {
        return teams.getAll(this.host, this.token);
    }

    public getTeamById(id: string) {
        return teams.getById(this.host, this.token, id);
    }

    public getTeamMembershipsByTeamId(id: string) {
        return teams.getTeamMemberships(this.host, this.token, id);
    }

    //
    // Templates
    //

    public getTemplates() {
        return templates.getAll(this.host, this.token);
    }

    public getTemplateById(id: string) {
        return templates.getById(this.host, this.token, id);
    }

    //
    // Users
    //

    public getUsers() {
        return users.getAll(this.host, this.token);
    }

    public getUserById(id: string) {
        return users.getById(this.host, this.token, id);
    }

    public getMembershipsByUserId(id: string) {
        return users.getUserMemberships(this.host, this.token, id);
    }
   */
}
