import constants from './constants';

export function addToCartRequest(id) {
  return {
    type: constants.ADD_TO_CART_REQUEST,
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: constants.ADD_TO_CART_SUCCESS,
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: constants.REMOVE_FROM_CART,
    id,
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: constants.UPDATE_AMOUNT_REQUEST,
    id,
    amount,
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: constants.UPDATE_AMOUNT_SUCCESS,
    id,
    amount,
  };
}
