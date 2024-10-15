"use client";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardForm from "@/components/CardForm";
import Form from "@/components/Form";
import Wrapper from "@/components/Wrapper";
import { deleteCard, editCard } from "@/redux/cardSlice";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardId = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const cards = useSelector((store) => store.cards.cards);
  const cardToChange = cards.find((card) => card.uniqueId === Number(id));

  const [editedCard, setEditedCard] = useState({
    uniqueId: cardToChange?.uniqueId || "",
    cardNumber: cardToChange?.cardNumber || "",
    cardHolder: cardToChange?.cardHolder || "",
    validThru: cardToChange?.validThru || "",
    cvv: cardToChange?.cvv || "",
    bankName: cardToChange?.bankName || "",
    active: cardToChange?.active || false,
    //This is the autofill in inputfields
  });
  useEffect(() => {
    if (!cardToChange) {
      router.push("/");
    }
  }, [cardToChange, router]);

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
    router.push("/");
  };
  // const handleInputChange = (e) => {
  //   const { name, value } = e.target; //deconstruct name och value från targeted input
  //   setEditedCard((prev) => ({ ...prev, [name]: value })); // hittar name as (key) för att ändra value
  //   //uppdatera editedCard state med det nya värdet från ett specifikt input field
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the input is for the card holder and validate it
    if (name === "cardHolder") {
      // Only allow letters and spaces
      if (/^[a-zA-Z\s]*$/.test(value)) {
        setEditedCard((prev) => ({ ...prev, [name]: value }));
      } else {
        alert("Only letters and spaces are allowed in the card holder's name.");
        return; // Early return to prevent further state update
      }
    } else {
      // For other fields, just update the state as normal
      setEditedCard((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleDeleteCard = () => {
    if (cardToChange && cardToChange.active === false) {
      dispatch(deleteCard({ id: cardToChange.uniqueId }));
      router.push("/");
    } else {
      alert("No card / Deactivate card before delete");
    }
  };

  return (
    <Wrapper>
      <main
        className={
          "relative text-center h-[80vh] max-h-[894px] w-[90vw] max-w-[400px] bg-white bg-opacity-30 p-8 rounded-2xl shadow-lg flex flex-col justify-between border border-white border-opacity-20 backdrop-blur-md transition-all duration-100 ease-in-out overflow-hidden"
        }
      >
        <div>
          {/* {id} */}
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
    </Wrapper>
  );
};

export default CardId;
