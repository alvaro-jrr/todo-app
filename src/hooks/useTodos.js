import { useContext } from "react";
import Context from "context/TodosContextProvider";

const useTodos = () => {
	const { todos, setTodos } = useContext(Context);

	return { todos, setTodos };
};

export default useTodos;
