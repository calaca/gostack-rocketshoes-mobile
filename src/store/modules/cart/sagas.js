import { call, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import constants from './constants';
import { addToCartSuccess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSuccess(response.data));
}

export default all([takeLatest(constants.ADD_TO_CART_REQUEST, addToCart)]);
