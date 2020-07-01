import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Wrapper,
  Container,
  Header,
  ImageContainer,
  Img,
  ButtonContainer,
  Button,
  ButtonTitle,
} from './styles';

import logo from '../../assets/logo.png';
import RatingOptions from '../../components/RatingOptions';

export default Ratings = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <ImageContainer>
            <Img source={logo} resizeMode="contain" />
          </ImageContainer>
        </Header>
        <RatingOptions />
      </Container>
      <ButtonContainer>
        <Button>
          <ButtonTitle>Enviar avaliação</ButtonTitle>
          <MaterialIcons name="send" size={20} color="#fff" />
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}
