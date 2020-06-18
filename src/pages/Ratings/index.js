import React from 'react';
import { AirbnbRating } from 'react-native-ratings';

import {
  Wrapper,
  Container,
  Header,
  ImageContainer,
  Img,
  RatingOption,
  RatingContainer,
  RatingTitle,
} from './styles';

import logo from '../../assets/logo.png';
import RatingOptions from '../../components/RatingOptions';

export default function Ratings() {
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
    </Wrapper>
  );
}
