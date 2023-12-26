import { createSlice } from "@reduxjs/toolkit";
import { addProject } from "./ProjectListReducer";
// import { projects } from "../../api/db.json";
// import {projects} from "../../api/db.json"

const formSlice = createSlice({
  name: "projectform",
  // initialState: projects,
  initialState: {
    // image: "",
    title: "",
    description: "",
    price: "",
  },
  reducers: {
    // changeImage(state, action) {
    //   state.image = action.payload;
    // },
    changeTitle(state, action) {
      state.title = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changePrice(state, action) {
      state.price = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addProject, (state) => {
    //   state.image = " ";
      state.title = " ";
      state.description = " ";
      state.price = " ";
    });
  }
});

export const { changeImage, changeTitle, changeDescription, changePrice } =
  formSlice.actions;
export const formReducer = formSlice.reducer;
