import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./styles.css";

const Header = () => {
	return (
		<header className="Header">
			<h1>Todo App</h1>

			<a
				className="Header-icon"
				href="https://github.com/alvaro-jrr/todo-app"
				title="Find me on Github"
			>
				<AiFillGithub />
			</a>
		</header>
	);
};

export default React.memo(Header);
