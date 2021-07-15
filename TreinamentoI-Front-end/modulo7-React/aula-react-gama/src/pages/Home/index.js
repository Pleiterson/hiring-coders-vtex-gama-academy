/* eslint-disable no-lone-blocks */
import React, {useState} from 'react';
import axios from 'axios';

import Repositories from '../Repositories';
import * as S from './styled'; {/* vai importar tudo que estiver dentro de styled para a variável S */}

function Home() {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    // console.log(usuario); // imprime o valor do input
    // response.data pega apenas os repositórios do GitHub
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <S.Container>
      {/* onChange pega o que foi digitado no input e inclui no value através do useState */}
      <S.Input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={res => setUsuario(res.target.value)}/>

      {/* onclick chama a função handlePesquisa */}
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>

      <Repositories />
    </S.Container>
  );
}

export default Home;