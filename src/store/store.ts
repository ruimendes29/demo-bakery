import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import { useDispatch, useSelector } from "react-redux";
import cartOpenReducer from "./cartOpenReducer";
// ...

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    cartOpen : cartOpenReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();