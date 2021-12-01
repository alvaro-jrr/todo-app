import { useContext } from "react";
import Context from "context/TodosContextProvider";

const useGlobalTodos = () => {
	const { todos, setTodos } = useContext(Context);

	return { todos, setTodos };
};

export default useGlobalTodos;
