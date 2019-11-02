import React from 'react';
import { ScrollView } from 'react-native';
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
];

const Cart = () => {
  return (
    <PageContainer>
      <ScrollView showsVerticalScrollIndicator={false} fillViewPort>
        <Table>
          {products.map(product => (
            <TableItem key={product.id}>
              <Details>
                <Image source={{ uri: product.image }} />
                <TextWrapper>
                  <Title>{product.title}</Title>
                  <Price>{product.price}</Price>
                </TextWrapper>
                <Icon name="delete-forever" size={24} color={colors.primary} />
              </Details>
              <Actions>
                <ActionWrapper>
                  <Icon
                    name="remove-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                  <Count>3</Count>
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color={colors.primary}
                  />
                </ActionWrapper>
                <SubTotal>R$ 314,58</SubTotal>
              </Actions>
            </TableItem>
          ))}
          <TotalWrapper>
            <TotalTitle>Total</TotalTitle>
            <TotalPrice>R$ 1584,66</TotalPrice>
            <Button>
              <ButtonText>Finalizar pedido</ButtonText>
            </Button>
          </TotalWrapper>
        </Table>
      </ScrollView>
    </PageContainer>
  );
};

export default Cart;
