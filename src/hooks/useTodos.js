import { useEffect } from "react/cjs/react.development";
import useGlobalTodos from "./useGlobalTodos";

const useTodos = () => {
	const { todos, setTodos } = useGlobalTodos();

	// in every render, set lastTodos as a JSON string with todos value
	useEffect(() => {
		localStorage.setItem("lastTodos", JSON.stringify(todos));
	}, [todos]);

	return { todos, setTodos };
};

export default useTodos;
