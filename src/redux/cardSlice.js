import { routeHome } from "@/utils/homeRouting";

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
    //Edit - Ska bara funka om det är inaktivt
    editCard: (state, action) => {
      const { id, newName, newHolder, newNumber, newCvv, newValid } =
        action.payload;
      state.cards = state.cards.map((card) =>
        card.uniqueId === id
          ? {
              ...card,
              validThru: newValid,
              bankName: newName,
              cardHolder: newHolder,
              cardNumber: newNumber,
              cvv: newCvv,
            }
          : card
      );
      localStorage.setItem("cards", JSON.stringify(state.cards));
      console.log(state.cards);
    },
    toggleStatus: (state, action) => {
      const { id } = action.payload;
      console.log("Toggling status for card with id:", id);
      state.cards = state.cards.map((card) => {
        if (card.uniqueId === id) {
          console.log("Before toggle:", card.active);
          const updatedCard = { ...card, active: !card.active };
          console.log("After toggle:", updatedCard.active);
          return updatedCard;
        }
        return card;
      });
      localStorage.setItem("cards", JSON.stringify(state.cards));
    },
    //Delete - bara om kortet är inaktivt
    deleteCard: (state, action) => {
      const { id } = action.payload;

      state.cards = state.cards.filter((card) => card.uniqueId !== id);
      localStorage.setItem("cards", JSON.stringify(state.cards));
      // routeHome();
    },
  },
});

export const { addCard, editCard, toggleStatus, deleteCard } =
  creditCardSlice.actions;

export default creditCardSlice.reducer;
