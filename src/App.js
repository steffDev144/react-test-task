import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Cards from "./components/cards/Cards";
import { Theme, presetGpnDefault } from "@consta/uikit/Theme";
import {useDispatch} from "react-redux";
import './App.scss';

import API from "./modules/universAPI";
import {useEffect} from "react";
import {updateLoading} from "./reducers/loadingSlice";

function App() {

	const dispatch = useDispatch();

	const findCards = () => {
		dispatch(updateLoading(true));
		API.getCards()
			.then(({data})=>{
				dispatch(updateLoading(data));
			})
			.catch((e) => {
				console.log(e)
			})
	}
	const getTags = () => {
		dispatch(updateLoading(true));
		API.getTags()
			.then(({data})=>{
				dispatch(updateLoading(data));
			})
			.catch((e) => {
				console.log(e)
			})
	}

	useEffect(() => {
		findCards();
		getTags();
	});

	return (
		<Theme className="App" preset={presetGpnDefault}>
			<Header />
			<Search />
			<Cards />
		</Theme>
	);
}

export default App;
