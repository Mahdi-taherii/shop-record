import { ActionTypes } from "Redux/constants/action-types";

export const productsReducer = (
  state = { products: [] },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
export const selectedEditedProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_EDITED_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const selectedBuyProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_BUY_PRODUCT:
      return [...payload];
    default:
      return state;
  }
};

export const addProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export const contactInfoReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.CONTACT_INFO:
      return { ...state, ...payload };
    default:
      return state;
  }
};
