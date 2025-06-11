import { configureStore } from '@reduxjs/toolkit'
import paletteReducer from './features/paletteSlice'

export const store = configureStore({
    reducer: {
        palette: paletteReducer
    }
});
