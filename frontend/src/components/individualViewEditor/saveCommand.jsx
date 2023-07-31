export const SaveCommand = (props) => {
  const { comandos, setComandos, comandoIndividual } = props;

  const index = comandoIndividual.index;

  //Guardar los cambios hechos al elemento seleccionado
  const saveElement = (e) => {
    e.preventDefault();
    const result = comandos.map((e) =>
      e.index === index ? { ...comandoIndividual } : e
    );
    setComandos(result);
    console.log("se guardo con exito");
  };

  return <button onClick={(e) => saveElement(e)}>Guardar Cambios</button>;
};
