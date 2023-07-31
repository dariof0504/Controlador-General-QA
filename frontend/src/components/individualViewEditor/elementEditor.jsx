import { useEffect, useState } from "react";
import { GeneralInstances } from "./generalInstances";
import { DetallesEspecificos } from "./detallesEspecificos";

export const ElementEditor = (props) => {
  const { comandos, setComandos, index, defaultSideCommands } = props;

  const [comandoIndividual, setComandoIndividual] = useState(comandos[0]);

  const [detalles, setDetalles] = useState(false);

  const handleDetalles = (e) => {
    e.preventDefault();
    setDetalles(!detalles);
  };

  const defaultElement = defaultSideCommands[index];

  useEffect(() => {
    setComandoIndividual(comandos[index]);
  }, [index]);

  return (
    <div>
      <button onClick={(e) => handleDetalles(e)}>
        Cambiar a detalles {!detalles ? "especificos" : "generales"}{" "}
      </button>
      {!detalles ? (
        <GeneralInstances
          comandos={comandos}
          setComandos={setComandos}
          index={index}
          comandoIndividual={comandoIndividual}
          setComandoIndividual={setComandoIndividual}
          defaultElement={defaultElement}
        />
      ) : (
        <DetallesEspecificos
          comandos={comandos}
          setComandos={setComandos}
          index={index}
          comandoIndividual={comandoIndividual}
          setComandoIndividual={setComandoIndividual}
          defaultElement={defaultElement}
        />
      )}
    </div>
  );
};
