import constants from './constants';

export function addToCart(product) {
  return {
    type: constants.ADD_TO_CART,
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
