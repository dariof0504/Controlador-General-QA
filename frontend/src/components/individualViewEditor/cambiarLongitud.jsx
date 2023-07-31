import { useState } from "react";

export const CambiarLongitud = (props) => {

  const { comandoIndividual, setComandoIndividual } = props;

  const [longitud, setLongitud] = useState(0);

  const submitLongitud = (evento) => {
    evento.preventDefault();
    const result = {...comandoIndividual, longitud}
    setComandoIndividual(result);
  };

  return (
    <div>
      <input type="number" onChange={(e) => setLongitud(e.target.value)} />
      <button onClick={(e) => submitLongitud(e)}>Cambiar longitud</button>
      <p>{comandoIndividual.longitud}</p>
    </div>
  );
};
