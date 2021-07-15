import React, {useState} from 'react';
import axios from 'axios';

function App(props) {
  const [usuario, setUsuario] = useState('');

  function handlePesquisa() {
    // console.log(usuario); // imprime o valor do input
    // response.data pega apenas os repositórios do GitHub
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    <>
      {/* onChange pega o que foi digitado no input e inclui no value através do useState */}
      <input className="usuarioInput" placeholder="Usuário" value={usuario} onChange={res => setUsuario(res.target.value)}/>

      {/* onclick chama a função handlePesquisa */}
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
    </>
  );
}

export default App;