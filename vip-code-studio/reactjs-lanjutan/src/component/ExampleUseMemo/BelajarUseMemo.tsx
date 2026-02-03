import { useMemo, useState } from "react";

const calculation = (num: number) => {
  console.log("Calculating...");

  for (let i = 0; i < 100000000; i++) {
    num += 1;
  }

  return num;
};

function BelajarUseMemo() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([]);

  // useMemo digunakan untuk menghindari render ulang ketika perubahan dari state manapun
  // dan hanya akan dirender ulang kembali ketika state yang dipakai mempunyai perubahan
  const result = useMemo(() => calculation(count), [count]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };
  return (
    <>
      <div>
        <div>
          <p>Count : {count}</p>
          <button onClick={increment}>+</button>
        </div>
        <div>
          <p>Calculation Result: {result}</p>
        </div>
        <hr />
        <div style={{ marginTop: "20px" }}>
          {todos.map((todo, index) => (
            <p key={index}>{todo}</p>
          ))}
          <button onClick={() => addTodo("Belajar React Typescript")}>
            Add Todo
          </button>
        </div>
      </div>
    </>
  );
}

export default BelajarUseMemo;
