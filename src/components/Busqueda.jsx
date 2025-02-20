import { useRef } from "react";

export const Busqueda = ({ setresultado }) => {
  const inputref = useRef();

  const getPaises = async (name) => {
    let response = await fetch("https://restcountries.com/v3.1/name/" + name);
    let data = await response.json();
    setresultado(data);
  };
  return (
    <>
      <h2>Busqueda de paises</h2>
      <input
        type=""
        ref={inputref}
        onChange={() => {
          getPaises(inputref.current.value);
        }}
      />
    </>
  );
};
