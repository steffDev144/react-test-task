import { useState } from "react";
import { AutoComplete } from '@consta/uikit/AutoComplete';
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import API from "../../modules/universAPI";

import './Search.scss';


export default function Search() {
	const [value, setValue] = useState("");
	const nameCards = useSelector(state => state.nameCards.value);
	let items = [];
	if(nameCards.payload) {
		items = nameCards.payload.map((item, index) => ({
			label: item,
			id: index,
		}));
	} else {
		items = nameCards.map((item, index) => ({
			label: item,
			id: index,
		}));
	}


	function editNameCards(e) {
		setValue(e);
		if(e) {
			API.getNameCards(e)
				.then(({data})=>{

				})
				.catch((e) => {
					console.log(e)
				})
		} else {
			API.getCards()
				.then(({data})=>{

				})
				.catch((e) => {
					console.log(e)
				})
		}

	}

	return (
		<Container>
			<AutoComplete
				type="text"
				className="search"
				placeholder="Введите текст"
				value={value}
				items={items}
				withClearButton={true}
				onChange={(e) => editNameCards(e)}
			/>
		</Container>
	)
}