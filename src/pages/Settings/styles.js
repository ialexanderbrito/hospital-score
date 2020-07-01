import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #f0f0f5;
  flex: 1;
  padding-top: 30px;
`;

export const Container = styled.View`
  padding-top: 365px;
  align-items: center;
`;

export const Header = styled.View`
  height: 50px;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: #1b1b1b;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
`;
export const Balance = styled.Text`
  color: #1b1b1b;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`;
