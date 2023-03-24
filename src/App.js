import Calendar from "./components/calendar/Calendar.tsx";
import "./App.css";
import { Footer } from "./components/footer/Footer.tsx";
import { Header } from "./components/header/Header.tsx";

function App() {

	return (
		<div className="App">
			<Header />
			<Calendar />
			<Footer />
		</div>
	);
}

export default App;
