import { ActionTypes } from "Redux/constants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};

export const selectedEditedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_EDITED_PRODUCT,
    payload: product,
  };
};

export const selectedBuyProduct = (obj) => {
  return {
    type: ActionTypes.SELECTED_BUY_PRODUCT,
    payload: obj,
  };
};

export const addProduct = (product) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: product,
  };
};

export const contactInfo = (product) => {
  return {
    type: ActionTypes.CONTACT_INFO,
    payload: product,
  };
};

export const getDataFromLocal = () => {
  const localData = localStorage.getItem("cart");
  const data = localData ? JSON.parse(localData) : [];
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: data,
  };
};
