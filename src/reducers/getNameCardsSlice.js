import { createSlice } from "@reduxjs/toolkit";

export const getNameCardsSlice = createSlice({
	name: "nameCards",
	initialState: {
		value: [],
	},
	reducers: {
		setNameCards: (state, payload) => ({
			...state,
			value: payload,
		}),
	}
});

export const { setNameCards } = getNameCardsSlice.actions;
export default getNameCardsSlice.reducer;