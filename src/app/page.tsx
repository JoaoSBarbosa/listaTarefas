"use client";

import { Header } from "@/components/Header";
import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

export default function Home() {
  const [list, setList] = useState<TodoItem[]>([
    {
      label: "Estudar Node-js",
      checked: false,
    },
    {
      label: "Estudar AWS",
      checked: false,
    },
    {
      label: "Estudar PHP",
      checked: false,
    },
    {
      label: "Estudar JavaScript",
      checked: true,
    },
    {
      label: "Ler apostilas",
      checked: true,
    },
    {
      label: "Desenvolver trabalho extensionista",
      checked: false,
    },
    { label: "Oranizar mesa de estudos", checked: false },
  ]);
  // STATES
  const [itemInput, setItemInput] = useState("");
  // ADICIONAR ITEM
  const handleAddButton = () => {
    if (itemInput.trim() !== "") {
      setList([...list, { label: itemInput, checked: false }]);
      setItemInput("");
    }
  };
  // EXCLUIR ITEM
  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index));
  };

  return (
    <>
      <Header />
      <main>
        <div className="h-screen flex flex-col items-center text-2xl">
          <h1 className="text-4x. mt-5">Lista de Tarefas</h1>

          <div className="flex gap-2 w-full max-w-4xl py-4 p-4 rounded-t-lg bg-gray-600 border-2 border-gray-500">
            <input
              type="text"
              value={itemInput}
              onChange={(e) => setItemInput(e.target.value)}
              placeholder="O que deseja fazer?"
              className="flex-1 border border-black p-3 text-2xl text-black rounded-md"
            />
            <button
              className="bg-green-600 py-1 px-2 rounded-md hover:bg-green-700 text-white transition-colors"
              onClick={handleAddButton}
            >
              Adicionar
            </button>
          </div>
          <p className="bg-gray-400 w-full max-w-4xl p-2 text-center">
            {list.length} itens na lista
          </p>
          <ul className="w-full max-w-4xl p-4 bg-gray-400 rounded-b-lg">
            {list.map((item, index) => (
              <li
                key={index}
                className="p-2 bg-gray-100 mb-2 rounded-md flex justify-between"
              >
                <div className="flex gap-2 items-center">
                  <span className="text-xs lowercase bg-sky-400 p-1 rounded-lg text-blue-900"></span>
                  {item.label}{" "}
                </div>
                <button
                  onClick={() => deleteItem(index)}
                  className="hover:bg-red-800 text-xl bg-red-500 text-white rounded-lg py-1 px-2"
                >
                  deletar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </>
  );
}
