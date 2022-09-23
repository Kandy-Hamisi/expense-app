import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Category = {
    id: number,
    category: string
}

export type InitialState = {
    categoryList: Category[]
}

const initialState: InitialState = {
    categoryList: [
        {
            id: 1,
            category: 'Salary'
        },
        {
            id: 2,
            category: 'Shopping'
        },
        {
            id: 3,
            category: 'Entertainment'
        }
    ]
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        addCategory: (state, action: PayloadAction<Category> ) => {
            // state.categoryList = state.categoryList.push(action.payload)
            state.categoryList = [...state.categoryList, action.payload];
        },
        removeCategory: (state, action: PayloadAction<number> ) => {
            state.categoryList = state.categoryList.filter(categories => categories.id != action.payload)
            console.log(action.payload)
        }
    }
})


export default categorySlice.reducer;
export const { addCategory, removeCategory } = categorySlice.actions