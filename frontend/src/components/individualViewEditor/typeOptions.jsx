import { AñadirAdvertencia } from "./añadirAdvertencia";
import { CambiarLongitud } from "./cambiarLongitud";

export const TypeOptions = (props) => {
  const { handleCheckBox, llaves, comandoIndividual, setComandoIndividual } =
    props;

  return (
    <div>
      {llaves.map((llave) => {
        return (
          <div>
            <p>{llave}</p>

            <input
              type="checkbox"
              checked={comandoIndividual[llave]}
              onChange={() => handleCheckBox(llave)}
            />

            {llave === "tieneAdvertencias" && comandoIndividual[llave] ? (
              <AñadirAdvertencia
                comandoIndividual={comandoIndividual}
                setComandoIndividual={setComandoIndividual}
              />
            ) : (
              llave === "longitudIndefinida" &&
              comandoIndividual[llave] && (
                <CambiarLongitud
                  comandoIndividual={comandoIndividual}
                  setComandoIndividual={setComandoIndividual}
                />
              )
            )}
          </div>
        );
      })}
    </div>
  );
};
