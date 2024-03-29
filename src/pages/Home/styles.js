import styled from 'styled-components/native';

export const Container = styled.View`
  background: #f0f0f5;
  flex: 1;
  padding-top: 5px;
`;

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

export const MapContainer = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  margin-top: 16px;
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

export const MarkerContainer = styled.View`
  width: 90px;
  height: 70px;
  background-color: #e02041;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  align-items: center;
`;

export const MarkerContainerImg = styled.Image`
  width: 90px;
  height: 45px;
`;

export const MarkerContainerText = styled.Text`
  flex: 1;
  color: #fff;
  font-family: ${'Roboto_400Regular'};
  font-size: 10px;
  line-height: 23px;
`;
