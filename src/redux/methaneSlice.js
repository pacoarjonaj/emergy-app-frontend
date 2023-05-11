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
	hazard: null,
	access: null,
	casualtiesDescription: null,
	adults: 0,
	children: 0,
	fatalities: 0,
	servicesDescription: null,
	sanitary: 0,
	firefighting: 0,
	rescue: 0,
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
		},
		changeAccess: (state, action) => {
			const access = action.payload
			state.access = access

			console.log(state)
		},
		changeService: (state, action) => {
			const { servicesDescription, sanitary, firefighting, rescue } = action.payload
			state.servicesDescription = servicesDescription
			state.sanitary = sanitary
			state.firefighting = firefighting
			state.rescue = rescue

			console.log(state)
		},
		changeSeverity: (state, action) => {
			const { casualtiesDescription, adults, children, fatalities } = action.payload
			state.casualtiesDescription = casualtiesDescription
			state.adults = adults
			state.children = children
			state.fatalities = fatalities
			
			console.log(state)
		},
		resetState: () => initialState
	}
})


export const { changeAccess, changeDeclaration, changeHazard, changeLocation, changeService, changeSeverity, changeType, resetState } = methaneSlice.actions;
export default methaneSlice.reducer;