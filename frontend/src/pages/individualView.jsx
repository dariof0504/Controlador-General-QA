import { useDispatch, useSelector } from "react-redux";
import { setNewSideFile } from "../api/sideReducer";
import { DeleteCurrentSide } from "../components/deleteCurrentSide";
import { SideIndividualView } from "../components/individualViewEditor/individualViewSide";

export const IndividualView = () => {
  //Longitud default
  const longitudDefault = 20;

  //Llamamos la informacion del objeto
  const sideElement = useSelector((state) => state.sideIndividualElement);

  //Funcion para cambiar el estado dle objeto
  const dispatch = useDispatch();
  
  const saveSideFunction = (comandos) => {
    dispatch(setNewSideFile(comandos))
    console.log('Comandos guardados con exito')
  }

  return (
    <div>
      <DeleteCurrentSide />
      <SideIndividualView
        longitudDefault={longitudDefault}
        sideElement={sideElement}
        saveSideFunction={saveSideFunction}
      />
    </div>
  );
};
