import { SaveCommand } from "./saveCommand";
import { TypeOptions } from "./typeOptions";

export const DetallesEspecificos = (props) => {
  //Llamamos a las propiedades
  const { comandos, setComandos, comandoIndividual, setComandoIndividual, defaultElement } =
    props;

  //Llaves del objeto con valores booleanos
  const llaves = [
    "tieneAdvertencias",
    "unico",
    "obligatorio",
    "longitudIndefinida",
  ];

  const handleCheckBox = (llave) => {
    let newComando = {
      ...comandoIndividual,
      [llave]: !comandoIndividual[llave],
    };

    //Validaciones para que los valores vuelvan a default
    if (llave === "tieneAdvertencias" && !comandoIndividual[llave]) {
      newComando = { ...newComando, advertencias: [] };
    } else if (llave === "longitudIndefinida" && comandoIndividual[llave]) {
      newComando = { ...newComando, longitud: defaultElement.longitud };
    }

    setComandoIndividual(newComando);
  };

  return (
    <>
      {comandoIndividual.command === "type" ? (
        <TypeOptions
          handleCheckBox={handleCheckBox}
          llaves={llaves}
          comandoIndividual={comandoIndividual}
          setComandoIndividual={setComandoIndividual}
        />
      ) : (
        <p>click</p>
      )}

      <SaveCommand
        comandos={comandos}
        setComandos={setComandos}
        comandoIndividual={comandoIndividual}
      />
    </>
  );
};
