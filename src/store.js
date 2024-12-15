import { configureStore } from '@reduxjs/toolkit';
import typeSlice from './reducers/typeSlice';
import cardsSlice from "./reducers/cardsSlice";
import favouritesSlice from "./reducers/favouritesSlice";
import getNameCardsSlice from "./reducers/getNameCardsSlice";
import tagsSlice from "./reducers/tagsSlice";
import loadingSlice from "./reducers/loadingSlice";
import cardSlice from "./reducers/cardSlice";

export default configureStore({
	reducer: {
		type: typeSlice,
		cards: cardsSlice,
		favorite: favouritesSlice,
		nameCards: getNameCardsSlice,
		tags: tagsSlice,
		loading: loadingSlice,
		card: cardSlice,
	}
})