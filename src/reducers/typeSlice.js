import { createSlice } from "@reduxjs/toolkit";

export const typeSlice = createSlice({
	name: "type",
	initialState: {
		value: 'search',
	},
	reducers: {
		search: state => {
			state.value = 'search';
		},
		favourites: state => {
			state.value = 'favourites';
		},
	},
});

export const { search, favourites } = typeSlice.actions;

export default typeSlice.reducer;