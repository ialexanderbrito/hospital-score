import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Aba2() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Tabs</BalanceTitle>
            <Balance>Segunda tela</Balance>
          </BalanceContainer>
        </Header>
      </Container>
    </Wrapper>
  );
}
