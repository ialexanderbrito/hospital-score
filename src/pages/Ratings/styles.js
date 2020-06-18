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

export const RatingOption = styled.View`
  margin-top: 30px;
  background-color: #fff;
  width: 350px;
  height: 200px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-left: 16px;
`;

export const RatingContainer = styled.View``;

export const RatingTitle = styled.Text`
  margin-top: 10px;
  margin-bottom: 15px;
  font-family: ${'Ubuntu_700Bold'};
  color: #e02041;
  font-size: 22px;
`;
