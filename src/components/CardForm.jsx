import React from "react";
import Card from "./Card";
import Button from "./Button";
import Cog from "./Cog";
import Link from "next/link";

const CardForm = () => {
  return (
    <div className={"h-full flex flex-col justify-between items-center"}>
      <Cog />
      <div className="mt-6 w-full">
        <Card />
      </div>

      <form className={"flex flex-col justify-between gap-4"}>
        <label className={"text-start"} htmlFor="cardNumber">
          Card Number:
        </label>
        <input
          type="text"
          id="cardNumber"
          placeholder="Enter Card Number"
          className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <label className={"text-start"} htmlFor="cardHolder">
          Card Holder:
        </label>
        <input
          type="text"
          id="cardHolder"
          placeholder="Enter Card Holder"
          className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
        <div className={"flex justify-between  mt-2"}>
          <div className={"flex flex-col w-1/2 pr-2"}>
            <label className={"text-start"} htmlFor="validThru">
              Valid Thru:
            </label>
            <input
              type="text"
              id="validThru"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div className={"flex flex-col w-1/2"}>
            <label className={"text-start"} htmlFor="cvv">
              CCV:
            </label>
            <input
              type="text"
              id="cvv"
              className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
        </div>
        <div className={"flex flex-col"}>
          <label className={"text-start"} htmlFor="bank">
            Chose Bank:
          </label>
          <select
            name="bankVendor"
            id="bank"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="">Chose Bank Vendor</option>
            <option value="handelsbanken">Handelsbanken</option>
            <option value="swedbank">Swedbank</option>
            <option value="nordea">Nordea</option>
          </select>
        </div>
      </form>
      <div className="mt-6 w-full">
        <Link href="/">
          <Button text={"Complete Card"} />
        </Link>
      </div>
    </div>
  );
};

export default CardForm;
