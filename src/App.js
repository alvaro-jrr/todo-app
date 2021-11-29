import Header from "components/Header";
import TodoForm from "components/TodoForm";
import ListOfTodos from "components/ListOfTodos";
import { TodosContextProvider } from "context/TodosContextProvider";
import SelectTodos from "components/SelectTodos";
import { IconContext } from "react-icons";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<IconContext.Provider value={{ size: "1.5rem", className: "Icon" }}>
				<Header />

				<main className="App-main">
					<TodosContextProvider>
						<TodoForm />

						<ListOfTodos />

						<SelectTodos />
					</TodosContextProvider>
				</main>
			</IconContext.Provider>
		</div>
	);
};

export default App;
