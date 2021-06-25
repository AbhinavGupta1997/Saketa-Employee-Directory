import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

  // Url of the Identity Provider
  issuer: 'https://localhost:5001',

  // URL of the SPA to redirect the user to after login
  redirectUri: 'http://localhost:4200/dashboard',

  postLogoutRedirectUri: 'http://localhost:4200/',

  // The SPA's id. The SPA is registerd with this id at the auth-server
  clientId: 'spa-demo',

  // set the scope for the permissions the client should request
  // The first three are defined by OIDC. The 4th is a usecase-specific one
  scope: 'openid profile offline_access AddressBookAPI', 

  requestAccessToken: true,

  responseType: 'code',
}
