import {UserManager} from 'oidc-client';

/* eslint-disable camelcase */
const userManagerConfig = {
    client_id: 'devdot-local',
    authority: 'https://ai-ci.avlr.sh',
    redirect_uri: 'http://localhost:4000/api-reference/signin-oidc',
    post_logout_redirect_uri: 'http://localhost:4000/api-reference/signout-oidc',
    response_type: 'id_token token',
    scope: 'openid avatax avatax_api'
};

/* eslint-enable camelcase */

const userManager = new UserManager(userManagerConfig);

export default userManager;
