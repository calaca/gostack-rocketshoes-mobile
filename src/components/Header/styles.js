import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Safe = styled.SafeAreaView`
  flex: 0;
  background-color: ${colors.darker};
  flex-direction: row;
`;

export const Container = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex: 1;
  padding: 20px;
`;

export const Logo = styled.Image`
  height: 23;
  width: 177;
`;

export const BadgeContainer = styled.View`
  z-index: 1;
  background-color: ${colors.primary};
  width: 20px;
  height: 20px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: -10px;
  margin-left: 10px;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const ButtonPress = styled(RectButton)`
  background: transparent;
`;
