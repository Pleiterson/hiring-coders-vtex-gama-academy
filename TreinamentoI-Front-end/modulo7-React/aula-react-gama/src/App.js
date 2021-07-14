import React, {useState} from 'react';

function App(props) {
  const [usuario, setUsuario] = useState('Pleiterson');
  return (
    <>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário"/>
      <button type="button">Pesquisar</button>
    </>
  );
}

export default App;