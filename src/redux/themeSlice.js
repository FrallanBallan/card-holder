const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  theme: localStorage.getItem("theme") || "lightmode",
};

export const themeSchemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      console.log("Saving theme to localstorage", state.theme);
      console.log("action.payload", action.payload);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { changeTheme } = themeSchemeSlice.actions;

export default themeSchemeSlice.reducer;
