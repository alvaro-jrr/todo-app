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

		setTodos((prevTodos) => {
			const id = prevTodos.length;

			return prevTodos.concat({ todo, id, isComplete: false });
		});

		setTodo("");
	};

	const handleChange = useCallback(
		(evt) => setTodo(evt.target.value),
		[setTodo]
	);

	return (
		<form className="TodoForm" onSubmit={handleSubmit}>
			<label>
				What you've to do?
				<input
					type="text"
					className="input"
					placeholder="Enter a task! (e.g: Shop groceries)"
					title="Add todo"
					onChange={handleChange}
					value={todo}
				/>
			</label>

			<button className="btn">
				<img src={AddIcon} height="24" width="24" alt="Add todo icon" />
			</button>
		</form>
	);
};

export default TodoForm;
