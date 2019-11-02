import React from 'react';
import { FlatList } from 'react-native';
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
import colors from '../../styles/colors';

const products = [
  {
    id: 1,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
  {
    id: 2,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 3,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 5,
    title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
    price: 139.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
  },
  {
    id: 6,
    title: 'Tênis Adidas Duramo Lite 2.0',
    price: 219.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis3.jpg',
  },
  {
    id: 4,
    title: 'Tênis de Caminhada Leve Confortável',
    price: 179.9,
    image:
      'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
  },
];

const Main = () => {
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
            <Price>{item.price}</Price>
            <Button>
              <IconWrapper>
                <Icon name="add-shopping-cart" size={16} color={colors.white} />
                <Count>1</Count>
              </IconWrapper>
              <ButtonText>Adicionar</ButtonText>
            </Button>
          </Card>
        )}
      />
    </PageContainer>
  );
};

export default Main;
