import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Busqueda } from "./components/Busqueda";
import { MostrarResultado } from "./components/MostrarResultado";

function App() {
  const [resultado, setresultado] = useState([]);
  const [error, seterror] = useState(false);
  console.log(resultado, "componente padre");

  return (
    <>
      <h1>Proyecto</h1>
      <Busqueda seterror={seterror} setresultado={setresultado} />
      <MostrarResultado error={error} resultado={resultado} />
    </>
  );
}

export default App;
