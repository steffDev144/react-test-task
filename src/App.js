import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";

import './App.scss';

import API from "./modules/universAPI";
import {useEffect} from "react";

function App() {

	const findCards = () => {
		API.getCards()
			.then(({data})=>{

			})
			.catch((e) => {
				console.log(e)
			})
	}

	useEffect(() => {
		findCards();
	});

	return (
		<Theme className="App" preset={presetGpnDefault}>
			<Header />
			<Cards />
		</Theme>
	);
}

export default App;
