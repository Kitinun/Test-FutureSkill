import * as actionTypes from "./bookTypes";

export const createBook = (payload) => {
  return { type: actionTypes.CREATEBOOK, payload };
};

