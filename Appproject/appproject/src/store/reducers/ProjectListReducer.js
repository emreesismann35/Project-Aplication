import { createSlice, nanoid } from "@reduxjs/toolkit";



const formListSlice = createSlice({
  name: "projectlist", 
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addProject(state, action) {
      state.data.push({
        image: action.payload.image,
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        id: nanoid(),
      });
    },

    removeProject(state, action) {
      const afterDeletingProjectList = state.data.filter((project) => {
        return project.id !== action.payload;
      });
      state.data = afterDeletingProjectList;
    },

    updateProject(state,action) {
      const updatedProjectList =state.data.map((project)=>{
        if (project.id=== action.payload.id){
          
          return {
            id:action.payload.id,
            image: action.payload.image,
            title:action.payload.title,
            description: action.payload.description,
            price: action.payload.price,
          };
          
        }
        // return project
      });
    state.data = updatedProjectList
    }
  },
});

export const { addProject, removeProject, updateProject } = formListSlice.actions;
export const formListReducer = formListSlice.reducer;
