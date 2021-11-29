import useView from "hooks/useView";
import React, { useCallback } from "react";
import "./styles.css";

const SelectTodos = () => {
	const { setView } = useView();

	const OPTIONS = ["all", "active", "completed"];

	const handleChange = useCallback(
		(evt) => setView(evt.target.value),
		[setView]
	);

	return (
		<form className="SelectTodos">
			<label>
				Show
				<select onChange={handleChange}>
					<optgroup label="Todo to Show">
						{OPTIONS.map((option, index) => {
							return <option key={index}>{option}</option>;
						})}
					</optgroup>
				</select>
			</label>
		</form>
	);
};

export default SelectTodos;
