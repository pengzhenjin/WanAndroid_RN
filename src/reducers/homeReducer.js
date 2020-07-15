import actionType from '../actions/types/actionType';

const initialState = {
    homeBanner: [], // 首页轮播数据
    page: 1,
    dataSource: [], // 列表数据源
    isRenderFooter: false, // 是否渲染列表 footer
    isFullData: false, // 是否加载完全部数据
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.FETCH_HOME_BANNER:
            return {
                ...state,
                homeBanner: action.homeBanner,
            };
        case actionType.FETCH_HOME_ARTICLE_LIST:
            const homeArticleData = action.homeArticleList;
            return {
                ...state,
                page: 1,
                dataSource: homeArticleData.datas,
                isRenderFooter: !!homeArticleData.total, // 只有total为0是不渲染footer
                isFullData: homeArticleData.curPage === homeArticleData.pageCount, // 数据最后一页显示"已加载全部"
            };
        case actionType.FETCH_HOME_ARTICLE_LIST_MORE:
            const homeArticleData2 = action.homeArticleList;
            return {
                ...state,
                page: ++state.page,
                dataSource: state.dataSource.concat(homeArticleData2.datas),
                isRenderFooter: !!homeArticleData2.total, // 只有total为0是不渲染footer
                isFullData: homeArticleData2.datas.length === 0, // 数据最后一页显示"已加载全部"
            };
        case actionType.FETCH_HOME_ARTICLE_LIST_FAILURE:
            return state;
        default:
            return state;
    }
};

export default homeReducer;
