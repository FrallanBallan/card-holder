const { createSlice } = require("@reduxjs/toolkit");

const savedCards = JSON.parse(localStorage.getItem("cards")) || [];

const initialState = {
  cards: savedCards,
};

export const creditCardSlice = createSlice({
  name: "newCard",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
      console.log("state.card:", state.cards);
      console.log("Action.payload", action.payload);
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
  },
});

export const { addCard } = creditCardSlice.actions;

export default creditCardSlice.reducer;
