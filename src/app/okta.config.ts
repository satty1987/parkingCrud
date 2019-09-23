
export const OKTA_CONFIG = {
    issuer: 'https://dev-337333.oktapreview.com/oauth2/default/v1/authorize',
    tokenUrl : '/oauth2/default/v1/token',
    userInfo : '/oauth2/default/v1/userinfo',
    revokeToken : '/oauth2/default/v1/revoke',
    logOut : '/oauth2/default/v1/ogout',
    queryParams : {
      response_type : 'code',
      redirect_uri: window.location.origin + '/implicit/callback',
      state : 'state-296bc9a0-a2a2-4a57-be1a-d0e2fd9bb601',
      client_id: '0oajdlgnt5ff98tXZ0h7',
      scope: 'openid profile email'
    }
  };
