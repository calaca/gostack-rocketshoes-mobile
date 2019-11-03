import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PageContainer from '../../components/PageContainer';
import {
  Table,
  TableItem,
  Details,
  Image,
  TextWrapper,
  Title,
  Price,
  Actions,
  SubTotal,
  ActionWrapper,
  Count,
  TotalWrapper,
  TotalTitle,
  TotalPrice,
  Button,
  ButtonText,
} from './styles';
import Empty from '../../components/Empty';
import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';
import { formatPrice } from '../../util/format';

const Cart = () => {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((sumTotal, product) => {
        return sumTotal + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <PageContainer>
      <ScrollView showsVerticalScrollIndicator={false} fillViewPort>
        <Table>
          {cart.map(product => (
            <TableItem key={product.id}>
              <Details>
                <Image source={{ uri: product.image }} />
                <TextWrapper>
                  <Title>{product.title}</Title>
                  <Price>{product.priceFormatted}</Price>
                </TextWrapper>
                <Icon
                  name="delete-forever"
                  size={24}
                  color={colors.primary}
                  onPress={() =>
                    dispatch(CartActions.removeFromCart(product.id))
                  }
                />
              </Details>
              <Actions>
                <ActionWrapper>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color={colors.primary}
                    onPress={() => decrement(product)}
                  />
                  <Count value={String(product.amount)} />
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color={colors.primary}
                    onPress={() => increment(product)}
                  />
                </ActionWrapper>
                <SubTotal>{product.subTotal}</SubTotal>
              </Actions>
            </TableItem>
          ))}
          {cart.length !== 0 ? (
            <TotalWrapper>
              <TotalTitle>Total</TotalTitle>
              <TotalPrice>{total}</TotalPrice>
              <Button>
                <ButtonText>Finalizar pedido</ButtonText>
              </Button>
            </TotalWrapper>
          ) : (
            <Empty />
          )}
        </Table>
      </ScrollView>
    </PageContainer>
  );
};

export default Cart;
