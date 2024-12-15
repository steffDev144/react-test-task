import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
	name: "card",
	initialState: {
		value: null,
	},
	reducers: {
		setInfo: (state, payload) => ({
			...state,
			value: payload,
		})
	}
});

export const { setInfo } = cardSlice.actions;
export default cardSlice.reducer;