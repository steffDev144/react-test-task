import { createSlice } from "@reduxjs/toolkit";

export const tagsSlice = createSlice({
	name: "tags",
	initialState: {
		value: [],
	},
	reducers: {
		setTags: (state, payload) => ({
			...state,
			value: payload,
		}),
		editTag: (state, payload) => ({
			...state,
			value: payload,
		})
	}
});

export const { setTags, editTag } = tagsSlice.actions;
export default tagsSlice.reducer;