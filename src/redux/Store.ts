import { configureStore } from "@reduxjs/toolkit"
import AddCharModalSlice from "./AddCharModalSlice"


export const store = configureStore({
    reducer: {
        addCharModal: AddCharModalSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
