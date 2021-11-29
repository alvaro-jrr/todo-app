import { useContext } from "react";
import Context from "context/TodosContextProvider";

const useView = () => {
	const { view, setView } = useContext(Context);

	return { view, setView };
};

export default useView;
