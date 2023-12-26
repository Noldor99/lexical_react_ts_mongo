import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { todoReducer } from "./slice/todoSlice"
import { userApi } from "./api/userApi"
import { baseApi } from "./api/baseApi"
import { textsApi } from "./api/textsApi"

const rootReducer = combineReducers({
  todo: todoReducer,
  [baseApi.reducerPath]: baseApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  [textsApi.reducerPath]: textsApi.reducer,
})

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }).concat(userApi.middleware, baseApi.middleware, textsApi.middleware),
  devTools: true,
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
