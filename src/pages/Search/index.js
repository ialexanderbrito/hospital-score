import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import LisHospital from '../../components/ListHospital';

import {
  Wrapper,
  Container,
  Header,
  ImageContainer,
  Img,
  SearchHospital,
  SearchHospitalInput,
  SearchButton,
} from './styles';

import logo from '../../assets/logo.png';

export default function Search() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <ImageContainer>
            <Img source={logo} resizeMode="contain" />
          </ImageContainer>
        </Header>
        <LisHospital />

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
