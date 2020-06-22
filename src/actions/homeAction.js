import Api from '../api/Api';
import actionType from './types/actionType';

export const fetchHomeBanner = () => dispatch => {
    console.log('dispatch：', dispatch);
    Api.getHomeBanner().then(response => {
        dispatch({
            type: actionType.FETCH_HOME_BANNER,
            homeBanner: response.data,
        });
    });
};

export const fetchHomeArticleList = () => dispatch => {
    Api.getHomeArticleList().then(response => {
        dispatch({
            type: actionType.FETCH_HOME_ARTICLE_LIST,
            homeArticleList: response.data,
        });
    }).catch(error => {
        dispatch({
            type: actionType.FETCH_HOME_ARTICLE_LIST_FAILURE,
        });
    });
};

export const fetchHomeArticleListMore = (page) => dispatch => {
    Api.getHomeArticleList(page).then(response => {
        dispatch({
            type: actionType.FETCH_HOME_ARTICLE_LIST_MORE,
            homeArticleList: response.data,
        });
    }).catch(error => {
        dispatch({
            type: actionType.FETCH_HOME_ARTICLE_LIST_FAILURE,
        });
    });
};
