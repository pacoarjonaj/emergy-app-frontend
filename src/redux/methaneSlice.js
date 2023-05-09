import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	date: null,
	isMajor: false,
	street: null,
	streetNumber: null,
	postalCode: null,
	city: null,
	country: null,
	type: null,
	hazard: null
};

export const methaneSlice = createSlice({
	name: "methane",
	initialState,
	reducers: {
		changeDeclaration: (state, action) => {
			const { date, isMajor } = action.payload
			state.date = date;
			state.isMajor = isMajor;

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
		},
		changeType: (state, action) => {
			const type = action.payload
			state.type = type
		
			console.log(state)
		},
		changeHazard: (state, action) => {
			const hazard = action.payload
			state.hazard = hazard

			console.log(state)
		}
	}
})


export const { changeDeclaration, changeHazard, changeLocation, changeType } = methaneSlice.actions;
export default methaneSlice.reducer;