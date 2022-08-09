enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

function queryStringify(data: Record<string, any>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }

  const keys = Object.keys(data);
  return keys.reduce(
    (result, key, index) => (
      `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`
    ),
    '?',
  );
}

type RequestOptions = {
  method: METHODS;
  headers?: Record<string, string>;
  data?: Record<string, any>;
} | Record<string, never>;

type Request = (url: string, options?: RequestOptions, timeout?: number) => Promise<XMLHttpRequest>;

class HTTPTransport {
  get: Request = (url, options = {}, timeout?) => this.request(
    url,
    {
      ...options,
      method: METHODS.GET,
    },
    timeout,
  );

  post: Request = (url, options = {}, timeout?) => this.request(
    url,
    {
      ...options,
      method: METHODS.POST,
    },
    timeout,
  );

  put: Request = (url, options = {}, timeout?) => this.request(
    url,
    {
      ...options,
      method: METHODS.PUT,
    },
    timeout,
  );

  delete: Request = (url, options = {}, timeout?) => this.request(
    url,
    {
      ...options,
      method: METHODS.DELETE,
    },
    timeout,
  );

  request: Request = (url, options = {}, timeout = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise((resolve, reject) => {
      if (!method) {
        reject(new Error('No method'));
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      xhr.open(
        method,
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  };
}

export default new HTTPTransport();
