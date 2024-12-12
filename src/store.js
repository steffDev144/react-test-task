import { configureStore } from '@reduxjs/toolkit';
import typeSlice from './reducers/typeSlice';
import cardsSlice from "./reducers/cardsSlice";
import favouritesSlice from "./reducers/favouritesSlice";

export default configureStore({
	reducer: {
		type: typeSlice,
		cards: cardsSlice,
		favorite: favouritesSlice,
	}
})