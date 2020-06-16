import styled from 'styled-components';

export const ListOption = styled.View`
  background-color: #fff;
  width: 340px;
  height: 340px;
  border-radius: 8px;
  padding: 15px;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const ListHospitalContainer = styled.View`
  margin-top: 100px;
  margin-left: 30px;
`;

export const ListHospitalTitle = styled.Text`
  margin-top: 10px;
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
  margin-top: 5px;
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
  width: 300px;
  height: 170px;
  border-radius: 10px;
  margin-top: 5px;
`;
