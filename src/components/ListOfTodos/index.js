import React from "react";
import useTodos from "hooks/useTodos";
import Todo from "components/Todo";
import "./styles.css";

const ListOfTodos = () => {
	const { todos } = useTodos();

	console.log(todos);

	const completeTodo = (index) => (todos[index].isComplete = true);

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
