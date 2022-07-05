import * as actionTypes from "../actions/bookTypes";

export const initialState = {
  bookList: [],
};

export default (state = initialState, { type, payload }) => {  
  switch (type) {
     case actionTypes.CREATEBOOK:
      return { ...state, bookList: payload};

    default:
      return state;
  }
};
