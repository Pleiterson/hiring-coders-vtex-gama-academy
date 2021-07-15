/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import * as S from './styled'; // vai importar tudo que estiver dentro de styled para a variável S

function Repositories() {
  const [repositories, setRepositories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // pegando os dados do localStorage e armazenando em repoName
    let repoName = localStorage.getItem('repoName');

    // se o localStorage não estiver vazio pega os dados, senão volta para a página Home
    if (repoName !== null) {
      repoName = JSON.parse(repoName); // realizando o parse do repoName
      setRepositories(repoName);
      // limpando o localStorage depois que ele for setado para buscar os dados que estão armazenados nele
      localStorage.clear();
    } else {
      history.push("/"); // retornando para a página principal
    }
  }, []);

  return (
    <S.Container>
      {/* acessando Title de styled através da variável S. Title é uma tag <h1> como definido em styled */}
      <S.Title>Repositórios</S.Title>
      <S.LinkHome to="/">Voltar</S.LinkHome>
      <S.List>
        {/* mapenando todo o nosso array dos repositórios */}
        {repositories.map(repository => {
          return (
            <S.ListItem>Repositório: {repository}</S.ListItem>
          );
        })}
      </S.List>
      <S.LinkHome to="/">Voltar</S.LinkHome>
    </S.Container>
  );
}

export default Repositories;