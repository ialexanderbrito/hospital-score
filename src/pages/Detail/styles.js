import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

export const Wrapper = styled.SafeAreaView`
  background: #f0f0f5;
  flex: 1;
  padding: 32px;
  padding-top: ${Constants.statusBarHeight + 30}px;
`;

export const BackHome = styled.TouchableOpacity``;

export const HospitalContainer = styled.View``;

export const HospitalTitle = styled.Text`
  font-family: ${'Ubuntu_700Bold'};
  margin-top: 10px;
  color: #e02041;
  font-size: 30px;
`;

export const HospitalType = styled.Text`
  font-family: ${'Roboto_500Medium'};
  margin-top: 5px;
  color: #1b1b1b;
  font-size: 13px;
`;

export const RatingContainer = styled.View``;

export const RatingTitle = styled.Text`
  font-family: ${'Ubuntu_700Bold'};
  margin-top: 40px;
  color: #e02041;
  font-size: 20px;
`;

export const RatingType = styled.Text`
  font-family: ${'Roboto_500Medium'};
  margin-top: 10px;
  color: #1b1b1b;
  font-size: 18px;
`;

export const RatingStar = styled.View`
  flex-direction: row;
`;

export const Footer = styled.View`
  margin-top: 80px;
  border-color: #999;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 32px;
`;

export const Button = styled.TouchableOpacity`
  width: 48%;
  background-color: #e02041;
  border-radius: 8px;
  height: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: ${'Roboto_400Regular'};
  margin-left: 8px;
  color: #fff;
  font-size: 16px;
`;
