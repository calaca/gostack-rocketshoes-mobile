import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Message } from './styles';
import colors from '../../styles/colors';

const Empty = ({ icon, message }) => {
  return (
    <Container>
      <Icon name={icon} size={60} color={colors.lightText} />
      <Message>{message}</Message>
    </Container>
  );
};

Empty.propTypes = {
  icon: PropTypes.string,
  message: PropTypes.string,
};

Empty.defaultProps = {
  icon: 'remove-shopping-cart',
  message: 'Carrinho vazio',
};

export default Empty;
