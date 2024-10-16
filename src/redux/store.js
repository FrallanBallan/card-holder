import creditCardReducer from "./cardSlice";
import { configureStore } from "@reduxjs/toolkit";
import themeSchemeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    cards: creditCardReducer,
    themes: themeSchemeReducer,
  },
});
