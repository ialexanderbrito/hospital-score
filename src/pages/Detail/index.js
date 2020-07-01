import React from 'react';
import { StyleSheet, Image, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Wrapper,
  BackHome,
  HospitalContainer,
  HospitalTitle,
  HospitalType,
  RatingContainer,
  RatingTitle,
  RatingType,
  RatingStar,
  Footer,
  Button,
  ButtonText,
} from './styles';

import teste from '../../assets/hospitais/moacyr.jpg';

export default Detail = () => {
  const navigation = useNavigation();

  function handleMaps() {
    Linking.openURL(`https://www.google.com.br/maps/dir//-22.804,-43.372`);
  }

  function handlePhone() {
    Linking.openURL(`tel:+5521979434402`);
  }

  return (
    <>
      <Wrapper>
        <BackHome onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" size={24} color="#e02041" />
        </BackHome>
        <Image style={styles.pointImage} source={teste} />
        <HospitalContainer>
          <HospitalTitle>Hospital Municipal Moacyr do Carmo</HospitalTitle>
          <HospitalType>Hospital geral</HospitalType>
        </HospitalContainer>
        <RatingContainer>
          <RatingTitle>Avaliações</RatingTitle>
          <RatingType>Limpeza</RatingType>
          <RatingStar>
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star-border" size={24} color="#e02041" />
            <MaterialIcons name="star-border" size={24} color="#e02041" />
          </RatingStar>

          <RatingType>Lotação</RatingType>
          <RatingStar>
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star-border" size={24} color="#e02041" />
            <MaterialIcons name="star-border" size={24} color="#e02041" />
            <MaterialIcons name="star-border" size={24} color="#e02041" />
            <MaterialIcons name="star-border" size={24} color="#e02041" />
          </RatingStar>

          <RatingType>Atendimento</RatingType>
          <RatingStar>
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star" size={24} color="#e02041" />
            <MaterialIcons name="star-border" size={24} color="#e02041" />
          </RatingStar>
        </RatingContainer>
        <Footer>
          <Button onPress={handleMaps}>
            <MaterialIcons name="location-on" size={20} color="#fff" />
            <ButtonText>Rota</ButtonText>
          </Button>

          <Button onPress={handlePhone}>
            <MaterialIcons name="phone" size={20} color="#fff" />
            <ButtonText>Telefone</ButtonText>
          </Button>
        </Footer>
      </Wrapper>
    </>
  );
};

const styles = StyleSheet.create({
  pointImage: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 32,
  },
});
