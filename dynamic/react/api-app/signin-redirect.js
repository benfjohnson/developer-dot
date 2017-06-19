import Oidc from 'oidc-client';

Oidc.Log.logger = console;

new Oidc.UserManager().signinRedirectCallback().then(() => {
    window.location = sessionStorage.devdotRedirectUrl || window.location.origin;
});
