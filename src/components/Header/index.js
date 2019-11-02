import React from 'react';
import { connect } from 'react-redux';
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

const Header = ({ navigation, cartSize }) => {
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
  cartSize: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
