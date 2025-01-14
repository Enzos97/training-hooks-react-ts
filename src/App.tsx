import { Counter } from "./components/Counter";
import { Usuario } from './components/Usuario';

import { TimerPadre } from "./components/TimerPadre";
import { ContadorRed } from "./components/ContadorRed";

function App() {

  return (
    <>
      <h1>React + Ts</h1>
      <hr></hr>
      <Counter/>
      <Usuario/>
      <h2>useEffect + useRef</h2>
      <hr></hr>
      <TimerPadre/>
      <h2>useReducer</h2>
      <hr></hr>
      <ContadorRed/>
    </>
  )
}

export default App
