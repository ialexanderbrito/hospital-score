import React, { useState, useEffect } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import {
  Wrapper,
  Container,
  Header,
  ImageContainer,
  Img,
  SearchHospital,
  SearchHospitalInput,
  SearchButton,
  ListHospitalContainer,
  ListHospitalTitle,
  ListHospitalDescription,
  ListHospitalHeader,
  ListHospitalCity,
  ListHospitalUF,
  ImgHospital,
} from './styles';

import logo from '../../assets/logo.png';
import teste from '../../assets/moacyr.jpg';

export default function Search() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <ImageContainer>
            <Img source={logo} resizeMode="contain" />
          </ImageContainer>
        </Header>
        <ListHospitalContainer>
          <ListHospitalTitle>
            Hospital Municipal Moacyr do Carmo
          </ListHospitalTitle>
          <ListHospitalDescription>Hospital Geral</ListHospitalDescription>
          <ListHospitalHeader>
            <ListHospitalCity>Duque de Caxias</ListHospitalCity>
            <ListHospitalUF>RJ</ListHospitalUF>
          </ListHospitalHeader>
          <ImgHospital source={teste} />
        </ListHospitalContainer>

        <SearchHospital>
          <SearchHospitalInput
            placeholder="Buscar por estrutura... ex: UPA"
            placeholderTextColor="#999"
            autoCapitalize="words"
          />
          <SearchButton onPress={() => {}}>
            <MaterialIcons name="search" size={24} color="#FFF" />
          </SearchButton>
        </SearchHospital>
      </Container>
    </Wrapper>
  );
}
