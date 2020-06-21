import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices/rootSlice";

export default configureStore({
  reducer: {
    rootReducer,
  },
});
