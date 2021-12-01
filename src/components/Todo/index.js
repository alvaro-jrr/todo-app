import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import "./styles.css";

const Todo = ({ todo, isComplete, completeTodo, deleteTodo, id }) => {
	const handleComplete = () => completeTodo(id);

	const handleTodo = () => deleteTodo(id);

	return (
		<li className="Todo">
			<p
				className={`Todo-text ${isComplete ? "completed" : ""}`}
				onClick={handleComplete}
			>
				{todo}
			</p>

			<span onClick={handleTodo} className="TodoIconContainer">
				<AiOutlineDelete />
			</span>
		</li>
	);
};

export default React.memo(
	Todo,
	(prevProps, nextProps) =>
		prevProps.id === nextProps.id &&
		prevProps.isComplete === nextProps.isComplete
);
