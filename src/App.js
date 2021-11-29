import Header from "components/Header";
import TodoForm from "components/TodoForm";
import ListOfTodos from "components/ListOfTodos";
import { TodosContextProvider } from "context/TodosContextProvider";
import "./App.css";
import SelectTodos from "components/SelectTodos";

const App = () => {
	return (
		<div className="App">
			<Header />

			<main className="App-main">
				<TodosContextProvider>
					<TodoForm />

					<ListOfTodos />

					<SelectTodos />
				</TodosContextProvider>
			</main>
		</div>
	);
};

export default App;
