import { useSideFilterMutation } from "../api/apiSideEndpoints";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSideFile } from "../api/sideReducer";
import { useNavigate } from "react-router-dom";

export const FileReaderComponent = () => {
    const [data, { status }] = useSideFilterMutation();
    const [file, setFile] = useState("");
    const [loadFile, setLoadFile] = useState(false);
    const [sideTitle, setSideTitle] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(status);
    }, [status]);

    const handleJsonReader = (e) => {
        const data = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const content = JSON.parse(e.target.result);
                setFile(content);
                setLoadFile(true);
            } catch (error) {
                console.log(error);
            }
        };

        reader.readAsText(data);
    };

    const sendData = async (e) => {
        e.preventDefault();
        const result = await data(file);
        result &&
            dispatch(
                setSideFile({
                    ...result.data,
                    title: sideTitle,
                })
            );
        navigate("/individual");
    };

    return (
        <form>
            <h1>Inserte aca el archivo por leer</h1>

            <input
                type="text"
                placeholder="Ingrese el nombre del test para registrar"
                onChange={(e) => setSideTitle(e.target.value)}
                required
            ></input>
            <input type="file" onChange={(e) => handleJsonReader(e)} accept=".side" />
            {loadFile && <button onClick={(e) => sendData(e)}>Enviar datos</button>}
        </form>
    );
};
