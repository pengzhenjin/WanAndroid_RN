const actionType = {
    // loading
    LOADING_SHOW: 'LOADING_SHOW',       // 显示 loading
    LOADING_HIDDEN: 'LOADING_HIDDEN',   // 隐藏 loading

    // home
    FETCH_HOME_BANNER: 'FETCH_HOME_BANNER', // 请求首页轮播
    FETCH_HOME_ARTICLE_LIST: 'FETCH_HOME_ARTICLE_LIST', // 请求首页文章列表
    FETCH_HOME_ARTICLE_LIST_MORE: 'FETCH_HOME_ARTICLE_LIST_MORE', // 请求首页文章列表上啦加载更多
    FETCH_HOME_ARTICLE_LIST_FAILURE: 'FETCH_HOME_ARTICLE_LIST_FAILURE', // 请求首页文章列表失败

};

export default actionType;
