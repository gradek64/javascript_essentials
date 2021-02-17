// custom
import { ENV_HOST } from './utils/ENV';

const apiService = () => {
  const responseMiddleware = (res) => res;
  const requestPath = (path, params) => {
    //for testing work with 2 BASE_URLs
    const PATH = ENV_HOST.BASE_URL;
    if (params && Object.keys(params).length > 1) {
      let query;

      for (const keys in params) {
        query += keys + '=' + params[keys] + '&';
      }
      console.log('requestPath1', PATH + path);
      //remove last '&' symbol
      return PATH + path + '?' + query.replace(/&$/, '').trim();
    }

    return PATH + path;
  };

  const requestInterceptor = (serviceConfig, customRequestHeaders) => {
    const requestHeaders = {
      'Content-Type': 'application/json',
    };

    let request = {
      method: serviceConfig.method,
      cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        ...requestHeaders,
        ...customRequestHeaders,
      },
    };

    if (serviceConfig.body && Object.keys(serviceConfig.body).length > 1) {
      request = Object.assign(request, {
        body: JSON.stringify(serviceConfig.body),
      });
    }
    return request;
  };

  const sendRequest = async (serviceConfig, customRequestHeaders) => {
    try {
      const response = await fetch(
        requestPath(serviceConfig.path, serviceConfig.params),
        requestInterceptor(serviceConfig, customRequestHeaders)
      );
      const res = await response.json();
      //console.log('res', res);
      return responseMiddleware(res);
    } catch (err) {
      console.log('it has errored');
    }
  };

  const get = (
    path,
    params = {},
    customRequestHeaders = {} //this syntax means optional with defualt {}
  ) => sendRequest({ method: 'GET', path, params }, customRequestHeaders);

  return {
    get,
  };
};

export default apiService();
