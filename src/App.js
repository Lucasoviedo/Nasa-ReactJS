import Calendar from "./components/calendar/Calendar.tsx";
import "./App.css";
import { Footer } from "./components/footer/Footer.tsx";
import { Header } from "./components/header/Header.tsx";
import { Description } from "./components/description/Description.tsx";

function App() {

	return (
		<div className="App">
			<Header />
				<Calendar />
				<Description/>
			<Footer />
		</div>
	);
}

export default App;
