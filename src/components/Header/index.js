import React from 'react';
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
  return (
    <Safe>
      <Container>
        <ButtonPress onPress={() => navigation.goBack()}>
          <Logo source={logo} />
        </ButtonPress>
        <ButtonPress onPress={() => navigation.navigate('Cart')}>
          <BadgeContainer>
            <BadgeText>10</BadgeText>
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
