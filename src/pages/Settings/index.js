import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  BalanceContainer,
  BalanceTitle,
  Balance,
} from './styles';

export default Settings = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <BalanceContainer>
            <BalanceTitle>Ajustes</BalanceTitle>
            <Balance>Ajustes</Balance>
          </BalanceContainer>
        </Header>
      </Container>
    </Wrapper>
  );
};
