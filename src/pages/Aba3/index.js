import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Aba3() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Tabs</BalanceTitle>
            <Balance>Terceira tela</Balance>
          </BalanceContainer>
        </Header>
      </Container>
    </Wrapper>
  );
}
