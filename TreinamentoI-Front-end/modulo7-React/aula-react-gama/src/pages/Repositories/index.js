/* eslint-disable no-lone-blocks */
import React from 'react';

import * as S from './styled'; {/* vai importar tudo que estiver dentro de styled para a variável S */}

function Repositories() {
  return (
    <S.Container>
      <S.Title>Repositórios</S.Title> {/* acessando Title de styled através da variável S. Title é uma tag <h1> como definido em styled */}
      <S.List>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
        <S.ListItem>Repositório: Nome Repositório</S.ListItem>
      </S.List>
    </S.Container>
  );
}

export default Repositories;