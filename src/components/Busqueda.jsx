import { useRef } from "react";

export const Busqueda = ({ setresultado, seterror }) => {
  const inputref = useRef();

  const getPaises = async (name) => {
    let response = await fetch("https://restcountries.com/v3.1/name/" + name);
    let data = await response.json();

    console.log(data);
    if (data.status == 404) {
      seterror(true);
      return;
    }
    seterror(false);
    setresultado(data);
  };
  return (
    <>
      <h2>Busqueda de paises</h2>
      <input
        type=""
        ref={inputref}
        onChange={() => {
          if (inputref.current.value !== "") {
            getPaises(inputref.current.value);
          }
        }}
      />
    </>
  );
};
