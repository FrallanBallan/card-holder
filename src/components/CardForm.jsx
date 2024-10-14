"use client";
import React from "react";
import Card from "./Card";
import Button from "./Button";
import Cog from "./Cog";
import Link from "next/link";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "@/redux/cardSlice";
import { useRouter } from "next/navigation";

const CardForm = () => {
  const [bank, setBank] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("Frans Codemaster");
  const [valid, setValid] = useState("MM/YY");
  const [cvv, setCvv] = useState("XXX");

  const dispatch = useDispatch();
  const router = useRouter();

  const handleCard = (e) => {
    e.preventDefault();
    let newCard = {
      bankName: bank,
      cardNumber,
      cardHolder,
      validThru: valid,
      cvv,
      active: false,
      uniqueId: Date.now(),
    };
    dispatch(addCard(newCard));
    router.push("/");
  };
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
    if (value.length > 16) value = value.slice(0, 16); // Limit to 16 digits

    // Format the number in 4+4+4+4 format
    const formattedValue = value.replace(/(.{4})/g, "$1 ").trim(); // Add space after every 4 digits

    setCardNumber(formattedValue);
  };

  return (
    <div className={"h-full flex flex-col justify-between items-center"}>
      <div className="mt-6 w-full">
        <div className="w-full max-w-sm h-[150px] bg-gradient-to-r from-[#E0F2FE] to-[#A0D6E8] text-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col justify-between transition-all duration-300 ease-in-out">
          <div className="flex items-center justify-between">
            <i className="text-2xl">⚔️</i>
            <h5 className="text-lg font-semibold">{bank}</h5>
          </div>

          <div className="my-4 text-center text-xl tracking-widest flex justify-between">
            <p className="text-start text-sm">{cardNumber}</p>
            <p className="text-sm">{cvv}</p>
          </div>

          <div className="flex items-center justify-between">
            <h5 className="text-base font-medium">{cardHolder}</h5>
            <div className="text-start">
              <p className="text-sm">Valid Thru:</p>
              <p className="text-sm"> {valid}</p>
            </div>
          </div>
        </div>
      </div>

      <form
        className={"flex flex-col justify-between gap-4"}
        onSubmit={handleCard}
      >
        <div className={"text-start"}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            value={cardNumber}
            onChange={handleCardNumberChange}
            type="text"
            id="cardNumber"
            placeholder="Enter Card Number"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            maxLength="19" // Max length: 16 digits + 3 spaces
          />
        </div>
        <div className={"text-start"}>
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            onChange={(e) => setCardHolder(e.target.value)}
            type="text"
            id="cardHolder"
            placeholder="Enter Card Holder"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
        <div className={"flex justify-between  mt-2"}>
          <div className={"flex flex-col w-1/2 pr-2"}>
            <label className={"text-start"} htmlFor="validThru">
              Valid Thru:
            </label>
            <input
              onChange={(e) => setValid(e.target.value)}
              placeholder="mm/yy"
              type="text"
              id="validThru"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className={"flex flex-col w-1/2"}>
            <label className={"text-start"} htmlFor="cvv">
              CCV:
            </label>
            <input
              onChange={(e) => setCvv(e.target.value)}
              placeholder="xxx"
              type="text"
              id="cvv"
              required
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className={"flex flex-col"}>
          <label className={"text-start"} htmlFor="bank">
            Chose Bank:
          </label>
          <select
            onChange={(e) => setBank(e.target.value)}
            name="bankVendor"
            id="bank"
            required
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Chose Bank Vendor</option>
            <option value="Handelsbanken">Handelsbanken</option>
            <option value="Swedbank">Swedbank</option>
            <option value="Nordea">Nordea</option>
          </select>
        </div>
        <div>
          <button
            type="submit"
            className={
              "w-full bg-slate-400 hover:bg-slate-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded  "
            }
          >
            Complete Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
