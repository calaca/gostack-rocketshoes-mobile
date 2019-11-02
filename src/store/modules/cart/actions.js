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

export function updateAmount(id, amount) {
  return {
    type: constants.UPDATE_AMOUNT,
    id,
    amount,
  };
}
