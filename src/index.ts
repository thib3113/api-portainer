import * as auth from './endpoints/Auth';
import * as endpoints from './endpoints/Endpoints';
import * as endpointGroups from './endpoints/EndpointGroups';
import * as registries from './endpoints/Registries';
import * as settings from './endpoints/Settings';
import * as status from './endpoints/Status';
import * as stacks from './endpoints/Stacks';
import * as users from './endpoints/Users';
import * as tags from './endpoints/Tags';
import * as teams from './endpoints/Teams';
import * as teamMemberships from './endpoints/TeamMemberships';
import * as templates from './endpoints/Templates';
import PortainerSession from './PortainerSession/PortainerSession';

export default PortainerSession;

export {
    auth, endpoints, endpointGroups, registries, settings, status, stacks, users, tags, teams, teamMemberships, templates
};
