import { createSlice } from "@reduxjs/toolkit";

export const favouritesSlice = createSlice({
	name: "favourites",
	initialState: {
		value: [],
	},
	reducers: {
		setFavorite: (state, payload) => ({
			...state,
			value: payload,
		}),
		deleteFavorite: (state, payload) => ({
			...state,
			value: payload,
		})
	},
});


export const { setFavorite } = favouritesSlice.actions;
export default favouritesSlice.reducer;