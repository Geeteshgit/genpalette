
import { createSlice } from '@reduxjs/toolkit'

const paletteSlice = createSlice({
  name: 'palette',
  initialState: {
    palette: [],
  },
  reducers: {
    setPalette: (state, action) => {
      state.palette = action.payload;
    }
  }
})

export const { setPalette } = paletteSlice.actions;
export default paletteSlice.reducer;