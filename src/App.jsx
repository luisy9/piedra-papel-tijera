import { useEffect, useState } from 'react';
import CajaEnemigo from './components/CajaEnemigo';
import CajaUsuario from './components/CajaUsuario';

const App = () => {

  const [valueUsuario, setValueUsuario] = useState('');
  const [runEnemigo, setRunEnemigo] = useState(false);

  function comparePlays(value) {
    if (value) {
      setRunEnemigo(true);
    }
  }

  return (
    <div className='h-screen'>
      <div className="grid grid-rows-2 h-full">
        <CajaEnemigo runEnemigo={runEnemigo} />
        <CajaUsuario
          comparePlays={comparePlays} />
      </div>
    </div>
  )
}

export default App
