import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            console.log(action.payload)
            state.items.push({ ...action.payload, quantity: 1 })
            console.log(state.items)

            return


        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1)
            console.log(state.items)

        },
        updateQuantity: (state, action) => {
            if (action.payload.type === "plus") {
                state.items[action.payload.index].quantity++
                return

                // state.items.forEach((elem, index) => {
                //     if (elem.name === action.payload.name) {
                //         console.log("inner if")

                //         const quantity = state.items[index].quantity
                //         state.items[index].quantity = quantity + 1;
                //         console.log("plused")
                //     }
                // })
            }
            if (action.payload.type === "minus") {
                state.items[action.payload.index].quantity--;
                return;
                // state.items.forEach((elem, index) => {
                //     if (elem.name === action.payload.name) {
                //         console.log("inner if")
                //         const quantity = state.items[index].quantity
                //         state.items[index].quantity = quantity - 1;
                //         console.log("minused")


                //     }
                // })

            }



        },
    },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
