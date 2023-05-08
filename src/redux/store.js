import { configureStore } from '@reduxjs/toolkit'
import methaneReducer from './methaneSlice'


export const store = configureStore({
	reducer: {
		methane: methaneReducer,
	},
})