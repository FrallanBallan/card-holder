import { toggleStatus } from "@/redux/cardSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch } from "react-redux";

const Form = ({ editedCard, handleChanges, handleInputChange }) => {
  console.log(editedCard);
  const dispatch = useDispatch();
  const router = useRouter();

  const handleStatus = () => {
    dispatch(toggleStatus({ id: editedCard.uniqueId }));
    router.push("/");
  };
  return (
    <div>
      <form
        onSubmit={handleChanges}
        className={"flex flex-col justify-between gap-4"}
      >
        <div className={"text-start"}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
            name="cardNumber"
            id="cardNumber"
            onChange={handleInputChange}
            value={editedCard.cardNumber}
            type="text"
            placeholder="Enter Card Number"
            className="w-full border border-gray-300 rounded-lg p-2 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            maxLength="19" // Max length: 16 digits + 3 spaces
          />
        </div>
        <div className={"text-start"}>
          <label htmlFor="cardHolder">Card Holder:</label>
          <input
            onChange={handleInputChange}
            value={editedCard.cardHolder}
            type="text"
            name="cardHolder"
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
              onChange={handleInputChange}
              value={editedCard.validThru}
              placeholder="mm/yy"
              type="text"
              name="validThru"
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
              onChange={handleInputChange}
              value={editedCard.cvv}
              placeholder="xxx"
              type="text"
              name="cvv"
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
            onChange={handleInputChange}
            value={editedCard.bankName}
            name="bankName"
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
          <button
            onClick={handleStatus}
            className={
              "w-full bg-slate-400 hover:bg-slate-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded  "
            }
          >
            {" "}
            {editedCard.active ? "Freeze Card" : "Activate Card"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
