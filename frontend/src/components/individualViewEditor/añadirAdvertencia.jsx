import { useState } from "react";
import uuid from "react-uuid";

export const AñadirAdvertencia = (props) => {
  const { comandoIndividual, setComandoIndividual } = props;

  const advertenciasActuales = comandoIndividual.advertencias;
  
  const numeroDeAdvertencias = comandoIndividual.advertencias.length > 0 ? true : false;

  const [advertencia, setAdvertencia] = useState("");

  const handleAdvertencia = (e) => {
    e.preventDefault();

    const listaAdvertencias = numeroDeAdvertencias
      ? [...advertenciasActuales, { id: uuid(), advertencia }]
      : [{id: uuid(), advertencia}];

    const result = {...comandoIndividual, advertencias: listaAdvertencias}

    setComandoIndividual(result);
  };

  const deleteAdvertencia = (evento, elemento) => {
    evento.preventDefault();

    const id = elemento.id;

    const advertenciasFiltradas = advertenciasActuales.filter(
      (e) => e.id !== id
    );

    const result = {...comandoIndividual, advertencias: advertenciasFiltradas}

    setComandoIndividual(result);
  };

  const uniqueKey = `${comandoIndividual.index} Añadir advertencia`;

  return (
    <div key={uniqueKey}>
      <div>
        <input type="text" onChange={(e) => setAdvertencia(e.target.value)} />
        <button onClick={(e) => handleAdvertencia(e)}>
          Añadir advertencia
        </button>
      </div>
      <div>
        {advertenciasActuales.map((e) => {
          return (
            <div>
              <p onClick={(i) => deleteAdvertencia(i, e)}>{e.advertencia}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
