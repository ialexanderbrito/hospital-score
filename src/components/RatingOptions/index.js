import React from 'react';
import { AirbnbRating } from 'react-native-ratings';

import { RatingOption, RatingContainer, RatingTitle } from './styles';

const items = [
  {
    key: String(Math.random()),
    quest: 'O que achou da limpeza?',
  },

  {
    key: String(Math.random()),
    quest: 'O que achou da lotação?',
  },

  {
    key: String(Math.random()),
    quest: 'O que achou do atendimento?',
  },
];

export default function RatingOptions() {
  return (
    <RatingContainer>
      {items.map((item) => (
        <RatingOption key={item.key}>
          <RatingTitle>{item.quest}</RatingTitle>
          <AirbnbRating
            count={5}
            reviews={['Muito Ruim', 'Ruim', 'Regular', 'Bom', 'Muito Bom']}
            defaultRating={5}
            size={24}
            reviewSize={18}
            selectedColor={'#e02041'}
            reviewColor={'#1b1b1b'}
          />
        </RatingOption>
      ))}
    </RatingContainer>
  );
}
