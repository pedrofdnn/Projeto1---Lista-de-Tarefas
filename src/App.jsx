import { useState } from "react";

export default function App() {
  function TodaLista() {
    const [todas, setTodas] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addtodas = () => {
      if (inputValue !== "") {
        setTodas([...todas, inputValue]);
        setInputValue("");
      }
    };
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Adcionar Tarefa</button>
      <ul>{}</ul>
    </div>
  );
}
