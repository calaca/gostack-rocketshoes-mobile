import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import Toast from 'react-native-root-toast';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import constants from './constants';
import { addToCartSuccess, updateAmountSuccess } from './actions';
import colors from '../../../styles/colors';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    Toast.show('Quantidade solicitada fora de estoque', {
      duration: 3000,
      position: -20,
      backgroundColor: colors.primary,
      textColor: colors.white,
      opacity: 1,
    });
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Toast.show('Quantidade solicitada fora de estoque', {
      duration: 3000,
      position: -20,
      backgroundColor: colors.primary,
      textColor: colors.white,
      opacity: 1,
    });
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest(constants.ADD_TO_CART_REQUEST, addToCart),
  takeLatest(constants.UPDATE_AMOUNT_REQUEST, updateAmount),
]);
