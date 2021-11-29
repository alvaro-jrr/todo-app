import React from "react";
import "./styles.css";

const Todo = ({ todo, isComplete, completeTodo, id }) => {
	const handleClick = () => completeTodo(id);

	return (
		<li className="Todo" onClick={handleClick}>
			<p className={isComplete ? "completed" : null}>{todo}</p>
		</li>
	);
};

export default React.memo(
	Todo,
	(prevProps, nextProps) =>
		prevProps.id === nextProps.id &&
		prevProps.isComplete === nextProps.isComplete
);
