/**
 * 网络请求工具类
 */
const headers = {
  'Accept': 'application/json;charset=utf-8',
  'Content-Type': 'application/json;charset=utf-8',
};

const HttpUtil = {
  /**
   * GET请求
   * @param url
   * @param params
   * @returns {Promise<R>}
   */
  get: (url, params) => {
    const requestUrl = makeUrl(url, params);
    console.log('url：', requestUrl);
    return new Promise((resolve, reject) => {
      fetch(requestUrl, {
        method: 'GET',
        headers: headers,
      }).then(response => response.json()).then(result => {
        resolve(result);
      }).catch(error => {
        console.error(`Request failed. Url = ${url} . Message = ${error}`);
        reject(error);
      });
    });
  },

  /**
   * POST请求
   * @param url
   * @param params
   * @returns {Promise<R>}
   */
  post: (url, params) => {
    console.log('url：', url);
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
      }).then(response => response.json()).then(result => {
        resolve(result);
      }).catch(error => {
        console.error(`Request failed. Url = ${url} . Message = ${error}`);
        reject(error);
      });
    });
  },
};

/**
 * 参数拼装
 * @param url
 * @param params
 * @returns {*}
 */
function makeUrl (url, params) {
  if (params) {
    url = url + (url.indexOf('?') === -1 ? '?' : '&');
    for (let key of Object.keys(params)) {
      url = url + encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&';
    }
    if (url.endsWith('&')) {
      url = url.substring(0, url.length - 1);
    }
  }
  return url;
}

export default HttpUtil;
