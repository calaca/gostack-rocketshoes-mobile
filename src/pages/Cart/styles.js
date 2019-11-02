import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Table = styled.View`
  background-color: ${colors.white};
  border-radius: 4px;
  padding: 10px;
`;

export const TableItem = styled.View`
  margin-bottom: 20px;
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const TextWrapper = styled.View`
  justify-content: center;
  flex: 1;
  margin-right: 30px;
`;

export const Title = styled.Text`
  color: ${colors.text};
  font-size: 14px;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
`;

export const Actions = styled.View`
  background-color: ${colors.lightFill};
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
`;

export const SubTotal = styled.Text`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
`;

export const ActionWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Count = styled.TextInput.attrs({
  editable: false,
})`
  background-color: ${colors.white};
  border-radius: 4px;
  border: 1px solid ${colors.border};
  width: 50px;
  padding: 5px 10px;
  margin: 0 5px;
  color: ${colors.text};
`;

export const TotalWrapper = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const TotalTitle = styled.Text`
  color: ${colors.lightText};
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
`;

export const TotalPrice = styled.Text`
  color: ${colors.black};
  font-weight: bold;
  font-size: 30px;
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity`
  height: 42px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  background-color: ${colors.primary};
  border-radius: 4px;
  align-self: stretch;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
`;
