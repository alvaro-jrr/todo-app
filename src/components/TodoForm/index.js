import React, { useCallback, useState } from "react";
import useTodos from "hooks/useTodos";
import { AiOutlinePlus } from "react-icons/ai";
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
					title="Enter a task"
					onChange={handleChange}
					value={todo}
				/>
			</label>

			<button className="btn" title="Add todo">
				<AiOutlinePlus />
			</button>
		</form>
	);
};

export default TodoForm;
