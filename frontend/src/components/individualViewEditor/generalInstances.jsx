import { useEffect, useState } from "react";
import { SaveCommand } from "./saveCommand";

export const GeneralInstances = (props) => {
  //Destructurizacion de las propiedades
  const {
    comandos,
    setComandos,
    index,
    comandoIndividual,
    setComandoIndividual,
    defaultElement,
  } = props;

  //Valor de los checkbox
  const llavesObject = {
    location: false,
    typeLocation: false,
    command: false,
    value: false,
  };

  //Estados de los checkbox
  const [checkBoxKeys, setCheckBoxKeys] = useState(llavesObject);

  //Cada vez que se cambia de indice o los comandos, entonces se cambia por default los checkbox
  useEffect(() => {
    setCheckBoxKeys(llavesObject);
  }, [index, comandos]);

  //Arreglo de las llaves
  const llaves = Object.keys(llavesObject);

  //Modificar la instancia del comando elegido por indice
  const handleComandoIndividual = (e) => {
    const result = {
      ...comandoIndividual,
      [e.target.className]: e.target.value,
    };
    setComandoIndividual(result);
  };

  //Cambiar a valor anteriores
  const changeDefaultValue = (llave) => {
    const defaultObject = {
      ...comandoIndividual,
      [llave]: defaultElement[llave],
    };
    setComandoIndividual(defaultObject);
  };

  //Cambiar estado de las checkbox
  const handleCheckBoxKey = (llave) => {
    const newCheckBoxKeys = { ...checkBoxKeys, [llave]: !checkBoxKeys[llave] };

    if (checkBoxKeys[llave]) {
      console.log("se cambio a default");
      changeDefaultValue(llave);
    }

    setCheckBoxKeys(newCheckBoxKeys);
  };

  //Crear input por cada llave
  const createInput = (llave) => {
    const validator = checkBoxKeys[llave];

    return (
      <div>
        <h3>Editar</h3>
        <h3>{llave}</h3>
        <input
          type="checkbox"
          checked={checkBoxKeys[llave]}
          onChange={() => handleCheckBoxKey(llave)}
        />
        {validator ? (
          <div>
            <input
              type="text"
              className={llave}
              onChange={(e) => handleComandoIndividual(e)}
            />
          </div>
        ) : (
          <>
            <h3>{comandoIndividual[llave]}</h3>
          </>
        )}
      </div>
    );
  };

  return (
    <div>
      {llaves.map((llave) => createInput(llave))}
      <SaveCommand
        comandos={comandos}
        setComandos={setComandos}
        comandoIndividual={comandoIndividual}
      />
    </div>
  );
};
