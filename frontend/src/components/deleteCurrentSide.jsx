import { useDispatch } from "react-redux"
import { deleteSide } from "../api/sideReducer"

export const DeleteCurrentSide = () => {

    const dispatch = useDispatch()

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteSide())
    }

    return (
        <div>
            <button onClick={(e) => handleDelete(e)} >
                Cancelar edicion
            </button>
        </div>
    )
}
