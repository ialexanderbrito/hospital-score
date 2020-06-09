import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default function Home() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Tabs</BalanceTitle>
            <Balance>Template</Balance>
          </BalanceContainer>
        </Header>
      </Container>
    </Wrapper>
  );
}
