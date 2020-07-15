import Api from '../api/Api';
import actionType from './types/actionType';

export const fetchHomeBanner = () => dispatch => {
    dispatch({type: actionType.LOADING_SHOW});
    Api.getHomeBanner().then(response => {
        dispatch({
            type: actionType.FETCH_HOME_BANNER,
            homeBanner: response.data,
        });
    }).catch(error => {
        dispatch({type: actionType.LOADING_HIDDEN});
    });
};

export const fetchHomeArticleList = () => dispatch => {
    Api.getHomeArticleList().then(response => {
        dispatch({
            type: actionType.FETCH_HOME_ARTICLE_LIST,
            homeArticleList: response.data,
        });
    }).catch(error => {
        dispatch({type: actionType.FETCH_HOME_ARTICLE_LIST_FAILURE});
    }).finally(() => {
        dispatch({type: actionType.LOADING_HIDDEN});
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
