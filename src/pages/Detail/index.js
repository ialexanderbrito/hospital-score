import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Detail() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Detalhes do Hospital</BalanceTitle>
            <Balance>Detalhes do hospital</Balance>
          </BalanceContainer>
        </Header>
      </Container>
    </Wrapper>
  );
}
