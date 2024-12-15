import store from "../store";

import {setItems} from "../reducers/cardsSlice";
import {setNameCards} from "../reducers/getNameCardsSlice";
import {setTags} from "../reducers/tagsSlice";
import {setInfo} from "../reducers/cardSlice";

class API {
	location = 'http://universities.hipolabs.com';

	dispatch(action) {
		store.dispatch(action);
	}



	async getCards() {
		const result = await fetch(this.location + `/search?limit=10`).then(res => res.json());
		const res = result.map((item) => {
			return item.name;
		})
		this.dispatch(setItems(res));
		return res;
	}

	async getNameCards(name) {
		const result = await fetch(this.location + `/search?name=${name}&limit=10`).then(res => res.json());
		const res = result.map((item) => {
			return item.name;
		})
		this.dispatch(setItems(res));
		this.dispatch(setNameCards(res));
		return res;
	}

	async getTags() {
		const result = await fetch(this.location + `/search`).then(res => res.json());
		let res = result.map((item) => {
			return item.country;
		})
		res = new Set(res);
		res = [...res];
		const newRes = res.map((item, i) => ({
			label: item,
			id: i,
			disabled: false,
		}))
		this.dispatch(setTags(newRes));
		return newRes;
	}

	async searchCardsByTag(tags, checked) {
		let limit = 100;
		if(checked) {
			limit = 20;
		}
		let count = 0;
		const result = await fetch(this.location + `/search`).then(res => res.json());
		let res = [];
		tags.forEach((tag) => {
			result.forEach((item) => {
				if(tag.label === item.country && count < limit) {
					res.push(item.name);
					count++;
				}
			});
		});

		this.dispatch(setItems(res));
		this.dispatch(setNameCards(res));
		return false;
	}

	async searchCardsByName(name) {
		const result = await fetch(this.location + `/search?name=${name}`).then(res => res.json());
		this.dispatch(setInfo(result));
		return result;
	}
}

export default new API;