import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #f0f0f5;
  flex: 1;
  padding-top: 0px;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const ImageContainer = styled.View`
  align-items: center;
  height: 70px;
`;

export const Img = styled.Image`
  width: 95px;
`;

export const SearchHospital = styled.View`
  position: absolute;
  top: 100px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const SearchHospitalInput = styled.TextInput`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  font-family: ${'Roboto_400Regular'};
  border-radius: 25px;
  padding-left: 20px;
  font-size: 16px;
  //*box-shadow: 0px 4px 4px rgba(255; 255; 255; 0.2)*//;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #e02041;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const ListHospitalContainer = styled.View`
  margin-top: 100px;
  margin-left: 30px;
`;

export const ListHospitalTitle = styled.Text`
  font-family: ${'Ubuntu_700Bold'};
  color: #e02041;
  font-size: 24px;
`;

export const ListHospitalDescription = styled.Text`
  color: #333;
  font-family: ${'Roboto_400Regular'};
`;

export const ListHospitalHeader = styled.View`
  flex-direction: row;
  margin-top: 10px;
`;

export const ListHospitalCity = styled.Text`
  color: #1b1b1b;
  font-family: ${'Roboto_500Medium'};
  font-weight: bold;
  font-size: 20px;
  margin-right: 15px;
`;

export const ListHospitalUF = styled.Text`
  color: #1b1b1b;
  font-family: ${'Roboto_500Medium'};
  font-weight: bold;
  font-size: 20px;
`;

export const ImgHospital = styled.Image`
  width: 340px;
  height: 170px;
  border-radius: 10px;
  margin-top: 5px;
`;
