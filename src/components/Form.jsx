import React from "react";

const Form = () => {
  return (
    <div>
      <form className={"flex flex-col justify-between gap-4"}>
        <div className={"text-start"}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input
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

export default Form;
