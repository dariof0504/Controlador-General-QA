export const SaveSide = ({ saveSideFunction, contenido }) => {
  const handleSave = (e) => {
    e.preventDefault();
    saveSideFunction(contenido);
  };

  return <button onClick={(e) => handleSave(e)}>Guardar Side</button>;
};
