import { useState, useEffect } from "react";

export default function ToDoList() {
  const storedItems = JSON.parse(localStorage.getItem("items"));
  const [items, setItems] = useState(storedItems);

  const [todas, setTodas] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  // funcao que armazena e mostra as tarefas
  const addTodas = () => {
    if (inputValue !== "") {
      setTodas([...todas, inputValue]);
      setInputValue("");
      setItems("");
    }
  };

  // função que deteleta a tarefa
  const deletaTarefa = (index) => {
    const updateTodas = todas.filter((_, i) => i !== index);
    setTodas(updateTodas);
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

      <ul>
        {todas.map((todas, index) => (
          <li key={index}>
            {todas}
            <button onClick={() => deletaTarefa(index)}> Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
