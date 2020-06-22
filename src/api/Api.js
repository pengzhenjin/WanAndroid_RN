import HttpUtil from '../utils/HttpUtil';

const BASE_URL = 'https://www.wanandroid.com/';

const Api = {
  // 获取首页轮播
  getHomeBanner: () => {
    const url = BASE_URL + 'banner/json';
    console.log('url：' + url);
    return HttpUtil.get(url);
  },

  // 获取首页文章列表
  getHomeArticleList: (page = 0) => {
    const url = BASE_URL + `article/list/${page}/json`;
    console.log('url：' + url);
    return HttpUtil.get(url);
  },
};
export default Api;
