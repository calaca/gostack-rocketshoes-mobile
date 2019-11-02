import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

class Main extends Component {
  static propTypes = {
    addToCartRequest: PropTypes.func.isRequired,
    amount: PropTypes.instanceOf(Object).isRequired,
  };

  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleProductItem = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

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
              <Button onPress={() => this.handleProductItem(item.id)}>
                <IconWrapper>
                  <Icon
                    name="add-shopping-cart"
                    size={16}
                    color={colors.white}
                  />
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
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
