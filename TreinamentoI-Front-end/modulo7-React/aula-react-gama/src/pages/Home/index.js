/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import * as S from './styled'; // vai importar tudo que estiver dentro de styled para a variável S

function Home(props) {
  const [usuario, setUsuario] = useState('');
  const history = useHistory();

  function handlePesquisa() {
    // console.log(usuario); // imprime o valor do input
    // response.data pega apenas os repositórios do GitHub
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data; // pegando os dados da API e armazenando em repositories
      const repoName = []; // array para armazenar os nomes dos repositórios identificados

      repositories.map((repository) => {
        repoName.push(repository.name); // armazena no array apenas o nome dos repositórios
      });
      localStorage.setItem('repoName', JSON.stringify(repoName)); // armazendo o repoName no localStorage do navegador
      history.push('/repositories'); // salvando os dados no useHistory() e chamando a página repositories
    });
  }

  return (
    <S.Container>
      {/* onChange pega o que foi digitado no input e inclui no value através do useState */}
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={res => setUsuario(res.target.value)}/>

      {/* onclick chama a função handlePesquisa */}
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
  );
}

export default Home;