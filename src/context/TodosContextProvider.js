import React, { useState } from "react";

const Context = React.createContext({});

export const TodosContextProvider = ({ children }) => {
	// get lastTodos if is set, if not then set an empty array as initial state
	const [todos, setTodos] = useState(
		localStorage.getItem("lastTodos")
			? JSON.parse(localStorage.getItem("lastTodos"))
			: []
	);

	// set initial view as all
	const [view, setView] = useState("all");

	return (
		<Context.Provider value={{ todos, setTodos, view, setView }}>
			{children}
		</Context.Provider>
	);
};

export default Context;
