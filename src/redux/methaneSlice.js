import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	date: null,
	isMayor: false,
	street: null,
	streetNumber: null,
	postalCode: null,
	city: null,
	country: null
};

export const methaneSlice = createSlice({
	name: "methane",
	initialState,
	reducers: {
		changeDeclaration: (state, action) => {
			const { date, isMayor } = action.payload
			state.date = date;
			state.isMayor = isMayor;

			console.log(state)
		},
		changeLocation: (state, action) => {
			const { street, streetNumber, postalCode, city, country } = action.payload
			state.street = street;
			state.streetNumber = streetNumber;
			state.postalCode = postalCode;
			state.city = city;
			state.country = country;

			console.log(state)
		}
	}
})


export const { changeDeclaration, changeLocation } = methaneSlice.actions;
export default methaneSlice.reducer;