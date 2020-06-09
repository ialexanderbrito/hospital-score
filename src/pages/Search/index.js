import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Search() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Buscar</BalanceTitle>
            <Balance>Pesquisar</Balance>
          </BalanceContainer>
        </Header>
      </Container>
    </Wrapper>
  );
}
