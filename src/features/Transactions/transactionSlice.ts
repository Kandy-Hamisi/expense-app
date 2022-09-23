import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type Transaction = {
    id: number,
    label: string,
    date: string,
    amount: number,
    categoryId: number
}

export type InitialState = {
    transactionList: Transaction[]
}

const initialState: InitialState = {
    transactionList: [
        {
            id: 1,
            label: "Shopping",
            date: '2022-09-24',
            amount: 5000,
            categoryId: 2
        },
        {
            id: 2,
            label: "Shopping",
            date: '2022-09-24',
            amount: -1000,
            categoryId: 2
        },
        {
            id: 3,
            label: "Entertainment",
            date: '2022-09-25',
            amount: 1400,
            categoryId: 3
        }
    ]
}

const transactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transactionList = [...state.transactionList, action.payload];
        }
    }
})


export default transactionSlice.reducer;
export const { addTransaction } = transactionSlice.actions