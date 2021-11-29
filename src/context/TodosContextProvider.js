import React, { useState } from "react";

const Context = React.createContext({});

export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [view, setView] = useState("all");

	return (
		<Context.Provider value={{ todos, setTodos, view, setView }}>
			{children}
		</Context.Provider>
	);
};

export default Context;
