import React, { useCallback, useState } from "react";
import useTodos from "hooks/useTodos";
import AddIcon from "images/add_black_24dp.svg";
import "./styles.css";

const TodoForm = () => {
	const { setTodos } = useTodos();
	const [todo, setTodo] = useState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();

		if (!todo) return null;

		setTodos((prevTodos) => prevTodos.concat({ todo, isComplete: false }));

		setTodo("");
	};

	const handleChange = useCallback(
		(evt) => setTodo(evt.target.value),
		[setTodo]
	);

	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="input"
				placeholder="Write something you've to do!"
				onChange={handleChange}
				value={todo}
			/>

			<button className="btn">
				<img src={AddIcon} title="Add todo" alt="Add todo icon" />
			</button>
		</form>
	);
};

export default TodoForm;
