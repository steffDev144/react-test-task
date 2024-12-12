import store from "../store";

import {setItems} from "../reducers/cardsSlice";

class API {
	location = 'http://universities.hipolabs.com';

	dispatch(action) {
		store.dispatch(action);
	}



	async getCards() {
		const result = await fetch(this.location + `/search?limit=10`).then(res => res.json());
		this.dispatch(setItems(result))
		return result;
	}
}

export default new API;