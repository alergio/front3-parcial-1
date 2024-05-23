import { useState } from "react";
import Card from "./Card";

const Form = () => {
  const [data, setData] = useState({
    name: "",
    color: "",
  });

  const [showData, setShowData] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (event) => {
    setShowData(false);
    setData({ ...data, name: event.target.value });
  };

  const handleColor = (event) => {
    setShowData(false);
    setData({ ...data, color: event.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    if (
      !data.name.startsWith(" ") &&
      data.name.trim().length >= 3 &&
      data.color.trim().length >= 6
    ) {
      setShowData(true);
      setError(false);
    } else {
      setShowData(false);
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label>Nombre</label>
        <input type="text" value={data.name} onChange={handleName} />
        <label>
          Escribe el codigo hexagonal de un color (ej: 93EC44) No agregues el
          {" '#'"}
        </label>
        <input type="text" value={data.color} onChange={handleColor} />
        <button>Enviar</button>
      </form>

      {showData && <Card props={data} />}
      {error && (
        <p className="colorRed">
          Por favor chequea que la información sea correcta
        </p>
      )}
    </>
  );
};

export default Form;
