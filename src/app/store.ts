import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import categoryReducer from '../features/Categories/categorySlice'
import modalReducer from '../features/Modal/modalSlice'
import transactionReducer from '../features/Transactions/transactionSlice'

const reducers = combineReducers({
    category: categoryReducer,
    modal: modalReducer,
    transactions: transactionReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
})

export default store
export type RootState = ReturnType<typeof store.getState>