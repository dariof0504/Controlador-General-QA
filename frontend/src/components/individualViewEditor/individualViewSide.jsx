import { useState } from "react";

import { ElementEditor } from "./elementEditor";
import { SaveSide } from "./saveSide";

export const SideIndividualView = (props) => {
  
  const { longitudDefault, sideElement, saveSideFunction } = props

  const comandosFiltrados = sideElement.commands.map((e) => {
    if (e.command === "click") {
      return { ...e, validador: false };
    } else {
      return {
        ...e,
        tieneAdvertencias: false,
        advertencias: [],
        unico: false,
        obligatorio: false,
        longitudIndefinida: false,
        longitud: longitudDefault,
      };
    }
  });

  //Estado de los comandos por modificar
  const [comandos, setComandos] = useState(comandosFiltrados);

  //Copia de rerspaldo en caso no se quiera modificar algun apartado
  const defaultSideCommands = { ...comandosFiltrados };

  const [index, setIndex] = useState(0);

  return (
    <div>
      <div>
        {comandos.map((comando) => {
          return <p onClick={() => setIndex(comando.index)}>Accion: {comando.index}</p>;
        })}
      </div>
      <div>
        <ElementEditor
          comandos={comandos}
          setComandos={setComandos}
          index={index}
          defaultSideCommands={defaultSideCommands}
        />
      </div>
      <SaveSide saveSideFunction={saveSideFunction} contenido={comandos} />
    </div>
  );
};
