import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export const Message = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.text};
`;
