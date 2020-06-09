import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Evalution() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Avaliação</BalanceTitle>
            <Balance>Avaliar</Balance>
          </BalanceContainer>
        </Header>
      </Container>
    </Wrapper>
  );
}
