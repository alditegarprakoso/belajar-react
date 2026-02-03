import { memo, useState } from "react";

type TodoListProps = {
  todos: string[];
};

// TodoList Component menggunakan memo bertujuan untuk mencegah render ulang ketika ada perubahan di parent component
// Karena ketika parent component merender ulang maka child component juga akan merender ulang, dan memo mencegah render ulang
// Kecuali ketika ada perubahan di props atau state pada child component
const TodoList = memo(({ todos }: TodoListProps) => {
  console.log("Call TodoList Component");
  return (
    <>
      <h2>My Todo : </h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
});

function BelajarMemo() {
  const [count, setCount] = useState<number>(0);
  const [todos, setTodos] = useState<string[]>([
    "Aku belum bisa typescript react",
    "tapi aku akan mencobanya",
  ]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = (newTodo: string) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <>
      <TodoList todos={todos} />
      <button onClick={() => addTodo("Belajar React Typescript")}>
        Add Todo
      </button>

      <p>Count: {count}</p>
      {/* Ketika Button di klik maka parent component akan merender ulang, termasuk child component */}
      <button onClick={increment}>Increment</button>
    </>
  );
}

export default BelajarMemo;
