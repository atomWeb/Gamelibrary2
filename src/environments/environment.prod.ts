import authpackage from '../../auth-config.json';
import apiurlpackage from '../../api-config.json';

export const environment = {
  production: true,
  auth: {
    domain: authpackage.domain,
    clientId: authpackage.clientId,
    redirectUri: window.location.origin,
  },
  apiurl: {
    apiurlbase: apiurlpackage.apiUrl,
  },
};
