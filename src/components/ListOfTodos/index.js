import React from "react";
import useTodos from "hooks/useTodos";
import Todo from "components/Todo";
import useView from "hooks/useView";
import "./styles.css";

const ListOfTodos = () => {
	const { todos, setTodos } = useTodos();
	const { view } = useView();

	const OPTIONS = {
		all: todos,
		completed: todos.filter((todo) => todo.isComplete),
		active: todos.filter((todo) => !todo.isComplete),
	};

	const todosToWatch = OPTIONS[view];

	const completeTodo = (index) => {
		setTodos((prevTodos) => {
			const newTodos = [...prevTodos];
			newTodos[index].isComplete = true;
			return newTodos;
		});
	};

	return (
		<ul className="ListOfTodos">
			{todosToWatch.map((props) => (
				<Todo
					key={props.id}
					id={props.id}
					completeTodo={completeTodo}
					{...props}
				/>
			))}
		</ul>
	);
};

export default ListOfTodos;
