import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Card = styled.View`
  background-color: ${colors.white};
  border-radius: 4px;
  margin-right: 15px;
  padding: 10px;
  height: 355px;
  width: 220px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
  background: ${colors.lightFill};
  align-self: center;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  color: ${colors.text};
  margin: 10px 0 5px 0;
`;

export const Price = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.primary};
  border-radius: 4px;
  height: 42px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  flex: 1;
`;

export const IconWrapper = styled.View`
  width: 54px;
  height: 42px;
  background-color: ${darken(0.1, colors.primary)};
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const Count = styled.Text`
  color: ${colors.white};
  font-size: 14px;
  margin-left: 5px;
`;
