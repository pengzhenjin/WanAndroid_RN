import HttpUtil from '../utils/HttpUtil';

const BASE_URL = 'https://www.wanandroid.com/';

// 获取首页轮播
const getHomeBanner = () => {
  const url = BASE_URL + 'banner/json';
  return HttpUtil.get(url);
};

// 获取首页文章列表
const getHomeList = (page = 0) => {
  const url = BASE_URL + `article/list/${page}/json`;
  return HttpUtil.get(url);
};

export { getHomeBanner, getHomeList };
