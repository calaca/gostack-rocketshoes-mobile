import produce from 'immer';
import constants from './constants';

export default function cart(state = [], action) {
  switch (action.type) {
    case constants.ADD_TO_CART_SUCCESS:
      return produce(state, draft => {
        const { product } = action;
        draft.push(product);
      });
    case constants.REMOVE_FROM_CART:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });
    case constants.UPDATE_AMOUNT_SUCCESS:
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount);
        }
      });
    default:
      return state;
  }
}
