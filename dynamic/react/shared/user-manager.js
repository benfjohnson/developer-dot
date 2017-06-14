import {UserManager} from 'oidc-client';

/* eslint-disable camelcase */
const userManagerConfig = {
    client_id: 'customer-portal-local',
    authority: 'https://ai-qa.avlr.sh',
    // redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}?callback=true`,
    redirect_uri: 'http://localhost:8000/auth/callback',
    response_type: 'code',
    scope: 'openid profile avatax offline_access',
    metadata: {
        issuer: 'https:/ai-qa.avlr.sh',
        authorization_endpoint: 'https://ai-qa.avlr.sh/connect/authorize',
        userinfo_endpoint: 'https://ai-qa.avlr.sh/connect/userinfo',
        end_session_endpoint: 'https://ai-qa.avlr.sh/connect/endsession',
        jwks_uri: 'https://ai-qa.avlr.sh/.well-known/openid-configuration/jwks'
    },
    signingKeys: [{
        kty: 'RSA',
        use: 'sig',
        kid: '62A5D69E64B8C67AFD37D18BF84D0C2F6F5183D8',
        x5t: 'YqXWnmS4xnr9N9GL-E0ML29Rg9g',
        e: 'AQAB',
        n: 'uROzaRBOAJihy6A-tqFVAXR-BvPwGYUKjrxSmGbhVKbMszP3e-5s1h3J-7rPzQ9iNbNdRvg6pNYgUG6ZXPiZvmdMU-DFpS8fTyxqcUZp5LBDRjuOvLv7NHUzT3mZTI-XaDdipXQP8IfTA7-6NFFTWgw-3ZgCxvhnHBT0mfDfB6e52ArZa2f1tsd6O3JHjAWIT_DpUiTlsKrQMehexSBmGfkE4XDPEI2ylI3Kf73bW3M5I1KPObaClcgN-uR2NwjUleAPmJctjMMzRJdBOxbDlk8HUGc2jiqJrfbYACrh3aCc7FNs5E_cRE2yxzcZ8SaKTvXDeaPoiKwTI2952oLIRw',
        x5c: ['MIID8TCCAtmgAwIBAgIJAJrIGYUbUuQlMA0GCSqGSIb3DQEBCwUAMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECAwCV0ExEDAOBgNVBAcMB1NlYXR0bGUxEDAOBgNVBAoMB0F2YWxhcmExETAPBgNVBAsMCElkZW50aXR5MRcwFQYDVQQDDA5haS5hdmFsYXJhLmNvbTEiMCAGCSqGSIb3DQEJARYTc3VwcG9ydEBhdmFsYXJhLmNvbTAeFw0xNjA2MjYwMDA5MjBaFw0xNzA2MjYwMDA5MjBaMIGOMQswCQYDVQQGEwJVUzELMAkGA1UECAwCV0ExEDAOBgNVBAcMB1NlYXR0bGUxEDAOBgNVBAoMB0F2YWxhcmExETAPBgNVBAsMCElkZW50aXR5MRcwFQYDVQQDDA5haS5hdmFsYXJhLmNvbTEiMCAGCSqGSIb3DQEJARYTc3VwcG9ydEBhdmFsYXJhLmNvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALkTs2kQTgCYocugPrahVQF0fgbz8BmFCo68Uphm4VSmzLMz93vubNYdyfu6z80PYjWzXUb4OqTWIFBumVz4mb5nTFPgxaUvH08sanFGaeSwQ0Y7jry7+zR1M095mUyPl2g3YqV0D/CH0wO/ujRRU1oMPt2YAsb4ZxwU9Jnw3wenudgK2Wtn9bbHejtyR4wFiE/w6VIk5bCq0DHoXsUgZhn5BOFwzxCNspSNyn+921tzOSNSjzm2gpXIDfrkdjcI1JXgD5iXLYzDM0SXQTsWw5ZPB1BnNo4qia322AAq4d2gnOxTbORP3ERNssc3GfEmik71w3mj6IisEyNvedqCyEcCAwEAAaNQME4wHQYDVR0OBBYEFMUQaRAG6ozTtvhFWZLUwf0mRsVwMB8GA1UdIwQYMBaAFMUQaRAG6ozTtvhFWZLUwf0mRsVwMAwGA1UdEwQFMAMBAf8wDQYJKoZIhvcNAQELBQADggEBAK+C4nKNHK+XZOkItfQkD1Vd0ONTQjacK74YaGifWUjH68zLFJC8UDOPn9D04KmB8rP7iO2/VWRAHjPnfyA+ZWEv2mHD4pRTSYcehKdTElWO7ToHl94VE56icCQWl0JSt+XmR3jveU0cI4FPqHkoNFdyAtGML2Wk+g8oF97/zmVJ2nZG+jHF4APo7liIbN0uiuxNvUSL3JjfOobn1IuId4Ajmj6wLn+Z0J4JDHuijGQKHSBj8iFznCD6DtRga5fGJA7M0Gv57T/7z5ubJB0cNhuGAoOkwf+dfITgMgQhFjfkgLEE2MRYbhEBINvEhetf7GgeCebnnYhwyw2Yob2wKKc=']
    }]
};

/* eslint-enable camelcase */

const userManager = new UserManager(userManagerConfig);

export default userManager;
