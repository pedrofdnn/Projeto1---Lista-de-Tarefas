import React, { useState } from "react";

export default function ToDoList() {
  const [todas, setTodas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTodas = () => {
    if (inputValue !== "") {
      setTodas([...todas, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={addTodas}>Adcionar Tarefa</button>

      <ul>{}</ul>
    </div>
  );
}
