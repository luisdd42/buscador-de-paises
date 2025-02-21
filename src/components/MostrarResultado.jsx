export const MostrarResultado = ({ error, resultado }) => {
  if (error) {
    return (
      <>
        <h1>no se encontro paises</h1>
      </>
    );
  }
  return (
    <div className="row">
      {resultado.map((element, index) => {
        return (
          <div key={index}>
            <h1>{element.name.common}</h1>;
            <img src={element.flags.svg} height={30} alt="" />;
            <h2>{element.population}</h2>
          </div>
        );
      })}
    </div>
  );
};
