import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #f0f0f5;
  flex: 1;
  padding-top: 5px;
`;

export const Container = styled.View``;

export const Header = styled.View``;

export const ImageContainer = styled.View`
  align-items: center;
  height: 70px;
`;

export const Img = styled.Image`
  width: 95px;
`;

export const ButtonContainer = styled.View`
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 22px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 10px;
  width: 200px;
  background-color: #e02041;
  border-radius: 8px;
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  font-family: ${'Roboto_400Regular'};
  color: #fff;
  margin-left: 8px;
  margin-right: 40px;
  font-weight: bold;
`;
