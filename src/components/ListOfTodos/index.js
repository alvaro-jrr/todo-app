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

	const completeTodo = (id) => {
		setTodos((prevTodos) => {
			const newTodos = [...prevTodos];

			newTodos.map((value) => {
				if (value.id !== id) return value;

				value.isComplete = true;

				return value;
			});

			return newTodos;
		});
	};

	const deleteTodo = (id) => {
		setTodos((prevTodos) => {
			return prevTodos.filter((value) => value.id !== id);
		});
	};

	return (
		<ul className="ListOfTodos">
			{todosToWatch.map(({ id, ...props }, index) => (
				<Todo
					key={id}
					id={id}
					completeTodo={completeTodo}
					deleteTodo={deleteTodo}
					{...props}
				/>
			))}
		</ul>
	);
};

export default ListOfTodos;
