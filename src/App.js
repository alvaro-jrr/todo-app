import Header from "components/Header";
import TodoForm from "components/TodoForm";
import ListOfTodos from "components/ListOfTodos";
import { TodosContextProvider } from "context/TodosContextProvider";
import "./App.css";

const App = () => {
	return (
		<div className="App">
			<Header />

			<main className="App-main">
				<TodosContextProvider>
					<TodoForm />

					<ListOfTodos />
				</TodosContextProvider>
			</main>
		</div>
	);
};

export default App;
