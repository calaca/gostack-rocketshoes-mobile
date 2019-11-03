import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Safe,
  Container,
  Logo,
  BadgeContainer,
  BadgeText,
  ButtonPress,
} from './styles';
import logo from '../../assets/images/logo.png';

const Header = ({ navigation }) => {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Safe>
      <Container>
        <ButtonPress onPress={() => navigation.goBack()}>
          <Logo source={logo} />
        </ButtonPress>
        <ButtonPress onPress={() => navigation.navigate('Cart')}>
          <BadgeContainer>
            <BadgeText>{cartSize}</BadgeText>
          </BadgeContainer>
          <Icon name="shopping-basket" size={20} color="#fff" />
        </ButtonPress>
      </Container>
    </Safe>
  );
};

Header.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Header;
