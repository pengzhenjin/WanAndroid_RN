import actionType from '../actions/types/actionType';

const initialState = {
  page: 1,
  homeList: {},
  homeBanner: [], // 首页轮播数据
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FETCH_HOME_BANNER: {
      break;
    }
    case actionType.FETCH_HOME_LIST: {
      break;
    }
    default: {
      return state;
    }
  }
};

export default homeReducer;
