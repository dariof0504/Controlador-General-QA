import { useState } from "react";

function Home() {
  const content = [
    { index: 0, content: "hola" },
    { index: 1, content: "hola2" },
    { index: 2, content: "hola3" },
  ];

  const [elements, setElements] = useState([]);

  const handleOnDrag = (e) => {
    const data = {
      content: e.content,
      index: e.index,
    };

    e.dataTransfer.setData("data", JSON.stringify(data));
  };

  const handleOnDrop = (e) => {
    console.log(e);
    // const elementType = e.dataTransfer.getData('data')

    // console.log(elementType)

    // setElements([...elements, elementType])
    // console.log(elements)
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("Drag");
  };

  const draggableElement = (e) => {
    return (
      <div draggable onDragStart={(e) => handleOnDrag(e)}>
        {e.content}
      </div>
    );
  };

  return (
    <div className="Main">
      {content.map((e) => draggableElement(e))}

      <br></br>

      <div
        className="dragSpace"
        style={{
          width: "100px",
          height: "200px",
          borderColor: "red",
          borderRadius: "10px",
          margin: "200px",
        }}
        onDrop={handleOnDrop}
        onDragOver={handleDragOver}
      >
        Elementos
        {elements.map((e, index) => (
          <p key={index}>{e.content}</p>
        ))}
      </div>
    </div>
  );
}

export default Home;
