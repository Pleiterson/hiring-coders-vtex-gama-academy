/* eslint-disable no-lone-blocks */
import React, {useState, useEffect} from 'react';

import * as S from './styled'; // vai importar tudo que estiver dentro de styled para a variável S

function Repositories() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    // pegando os dados do localStorage e armazenando em repoName
    let repoName = localStorage.getItem('repoName');

    repoName = JSON.parse(repoName);
    setRepositories(repoName);
    // limpando o localStorage depois que ele for setado para buscar os dados que estão armazenados nele
    localStorage.clear();
  }, []);

  return (
    <S.Container>
      {/* acessando Title de styled através da variável S. Title é uma tag <h1> como definido em styled */}
      <S.Title>Repositórios</S.Title>
      <S.List>
        {/* mapenando todo o nosso array dos repositórios */}
        {repositories.map(repository => {
          return (
            <S.ListItem>Repositório: {repository}</S.ListItem>
          );
        })}
      </S.List>
    </S.Container>
  );
}

export default Repositories;