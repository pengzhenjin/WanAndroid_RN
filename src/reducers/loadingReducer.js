import actionType from '../actions/types/actionType';

const initialState = {
    isShowLoading: false,
};

const loadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.LOADING_SHOW:
            return {
                ...state,
                isShowLoading: true,
            };
        case actionType.LOADING_HIDDEN:
            return {
                ...state,
                isShowLoading: false,
            };
        default:
            return state;
    }
};

export default loadingReducer;
