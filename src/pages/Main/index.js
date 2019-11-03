import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PageContainer from '../../components/PageContainer';
import {
  Card,
  Image,
  Title,
  Button,
  ButtonText,
  IconWrapper,
  Count,
  Price,
} from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import colors from '../../styles/colors';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleProductItem(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <PageContainer>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <Card>
            <Image source={{ uri: item.image }} />
            <Title>{item.title}</Title>
            <Price>{item.formattedPrice}</Price>
            <Button onPress={() => handleProductItem(item.id)}>
              <IconWrapper>
                <Icon name="add-shopping-cart" size={16} color={colors.white} />
                <Count>{amount[item.id] || 0}</Count>
              </IconWrapper>
              <ButtonText>Adicionar</ButtonText>
            </Button>
          </Card>
        )}
      />
    </PageContainer>
  );
}
