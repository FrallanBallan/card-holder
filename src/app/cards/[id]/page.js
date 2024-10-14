"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";
import Form from "@/components/Form";
import { deleteCard, editCard } from "@/redux/cardSlice";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardId = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const cards = useSelector((store) => store.cards.cards);
  const { id } = useParams();
  // console.log(cards);
  const cardToChange = cards.find((card) => card.uniqueId === Number(id)); //!!BYT NAMN PÅ CARD.ID!!!
  // console.log(cardToChange);

  const [editedCard, setEditedCard] = useState({
    uniqueId: cardToChange.uniqueId,
    cardNumber: cardToChange.cardNumber, // set cardNumber from cardTOChange
    cardHolder: cardToChange.cardHolder,
    validThru: cardToChange.validThru,
    cvv: cardToChange.cvv,
    bankName: cardToChange.bankName,
    active: cardToChange.active,
  });

  const handleChanges = (e) => {
    e.preventDefault();
    console.log("Updated Card", { id: cardToChange.uniqueId });
    dispatch(
      editCard({
        id: cardToChange.uniqueId,
        newName: editedCard.bankName,
        newHolder: editedCard.cardHolder,
        newNumber: editedCard.cardNumber,
        newCvv: editedCard.cvv,
        newValid: editedCard.validThru,
      })
    );
    console.log(editedCard);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target; //deconstruct name och value från targeted input
    setEditedCard((prev) => ({ ...prev, [name]: value })); // hittar name as (key) för att ändra value
    //uppdatera editedCard state med det nya värdet från ett specifikt input field
  };
  const handleDeleteCard = () => {
    dispatch(deleteCard({ id: cardToChange.uniqueId }));
    router.push("/");
  };

  return (
    <div
      className={
        "h-screen bg-slate-700 flex flex-col justify-center items-center"
      }
    >
      <main
        className={
          "relative text-center h-[97vh] w-full max-w-sm bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-300 ease-in-out"
        }
      >
        <div>
          {id}
          <Button text={"Delete Card"} onClick={handleDeleteCard} />

          {cardToChange ? (
            <Card
              key={cardToChange.uniqueId}
              {...cardToChange}
              editedCard={editedCard}
            />
          ) : (
            <div>Card no found</div>
          )}
        </div>
        <Form
          editedCard={editedCard}
          handleChanges={handleChanges}
          handleInputChange={handleInputChange}
        />
      </main>
    </div>
  );
};

export default CardId;
