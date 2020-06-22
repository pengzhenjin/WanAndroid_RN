import actionType from '../actions/types/actionType';

const initialState = {
  homeBanner: [], // 首页轮播数据
  page: 1,
  homeArticleList: {},
  dataSource: [], // 列表数据源
  isRenderFooter: false, // 是否渲染列表footer
  isFullData: false, // 是否加载完全部数据
  websites: [], // 常用网站数据
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_HOME_BANNER:
      return {
        ...state,
        homeBanner: action.homeBanner,
      };
    case actionType.FETCH_HOME_ARTICLE_LIST:
      return {
        ...state,
        page: 1,
        homeArticleList: action.homeArticleList,
        dataSource: action.homeArticleList.datas,
        isRenderFooter: !!action.homeArticleList.total, // 只有total为0是不渲染footer
        isFullData: action.homeArticleList.curPage === action.homeArticleList.pageCount, // 数据最后一页显示"已加载全部"
      };
    case actionType.FETCH_HOME_ARTICLE_LIST_MORE:
      return {
        ...state,
        page: ++state.page,
        dataSource: state.dataSource.concat(action.homeArticleList.datas),
        isRenderFooter: !!action.homeArticleList.total, // 只有total为0是不渲染footer
        isFullData: action.homeArticleList.datas.length === 0, // 数据最后一页显示"已加载全部"
      };
    case actionType.FETCH_HOME_ARTICLE_LIST_FAILURE:
      return state;
    default:
      return state;
  }
};

export default homeReducer;
