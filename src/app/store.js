import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slices/rootSlice";
import formReducer from "../slices/formSlice";

export default configureStore({
  reducer: {
    rootReducer,
    formReducer,
  },
});
