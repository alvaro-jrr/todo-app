import React, { useState } from "react";

const Context = React.createContext({});

export const TodosContextProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);

	return (
		<Context.Provider value={{ todos, setTodos }}>
			{children}
		</Context.Provider>
	);
};

export default Context;
