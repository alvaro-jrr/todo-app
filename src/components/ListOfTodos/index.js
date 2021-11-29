import React from "react";
import useTodos from "hooks/useTodos";
import Todo from "components/Todo";
import "./styles.css";

const ListOfTodos = () => {
	const { todos, setTodos } = useTodos();

	const completeTodo = (index) => {
		setTodos((prevTodos) => {
			const newTodos = [...prevTodos];
			newTodos[index].isComplete = true;
			return newTodos;
		});
	};

	return (
		<ul className="ListOfTodos">
			{todos.map((props, index) => (
				<Todo
					key={index}
					id={index}
					completeTodo={completeTodo}
					{...props}
				/>
			))}
		</ul>
	);
};

export default ListOfTodos;
