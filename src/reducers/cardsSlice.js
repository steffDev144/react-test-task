import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
	name: "cards",
	initialState: {
		items: [],
	},
	reducers: {
		setItems: (state, payload) => ({
			...state,
			items: payload,
		})
	}
});

export const { setItems } = cardsSlice.actions;
export default cardsSlice.reducer;