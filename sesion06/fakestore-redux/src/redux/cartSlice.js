import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload)
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions

// Es necesario exportar los 2 reducers para poder usarlos en otros archivos
export default cartSlice.reducer