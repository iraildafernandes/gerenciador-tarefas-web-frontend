import React from 'react';
import * as Styled from './styles';
import Header from '../../Components/Header'

function Home() {
  return (
    <Styled.Container>
      <Header />
    </Styled.Container>
  )
}

// Responsável por exportar a função para as outras áreas do cóigo.
export default Home;
