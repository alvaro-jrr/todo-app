import React, { useState } from "react";
import "./styles.css";

const Todo = ({ todo, isComplete, completeTodo, id }) => {
	const [complete, setComplete] = useState(isComplete);

	const handleClick = () => {
		completeTodo(id);
		setComplete(true);
	};

	return (
		<li className="Todo" onClick={handleClick}>
			<p className={complete ? "completed" : null}>{todo}</p>
		</li>
	);
};

export default React.memo(
	Todo,
	(prevProps, nextProps) => prevProps.id === nextProps.id
);
