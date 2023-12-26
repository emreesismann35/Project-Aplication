import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./reducers/ProjectFormReducer";
import { formListReducer } from "./reducers/ProjectListReducer";


export const store = configureStore({
  reducer: {
    projectform: formReducer,
    projectlist: formListReducer
  },
});
