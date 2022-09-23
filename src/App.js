import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<div className="App">
			<Header />
			<Hero
				title="Become a developer"
				message="A flexible and powerful way to improve your career"
				color="red"
				age={10}
				isHere
			/>
			<Hero
				title="I'm a title"
				message="I'm a Call To Action"
				age="10"
				color="blue"
			/>
		</div>
	);
}

export default App;
