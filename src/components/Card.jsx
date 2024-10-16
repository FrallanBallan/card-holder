"use client";
import { useRouter } from "next/router";
import React from "react";
import HandelsbankenLogo from "@/assets/images/image.png";
import SwedbankLogo from "@/assets/images/swedbank-mobile-banking-android-bank.jpg";
import NordeaLogo from "@/assets/images/NB.webp";

import Image from "next/image";

const Card = ({
  cardNumber,
  cardHolder,
  bankName,
  cvv,
  validThru,
  uniqueId,
  onClick,
}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="w-full max-w-sm h-[200px] bg-gradient-to-r from-[#E0F2FE] to-[#A0D6E8] text-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg flex flex-col justify-between transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-opacity-400 cursor-pointer"
      >
        <div className="flex items-center justify-between ">
          {(bankName === "Handelsbanken" && (
            <Image
              src={HandelsbankenLogo}
              alt="Handelsbanken Logo"
              width={40} // Specify width
              height={40} // Specify height
              style={{ borderRadius: "10%" }}
            />
          )) ||
            (bankName === "Swedbank" && (
              <Image
                src={SwedbankLogo}
                alt="Handelsbanken Logo"
                width={40} // Specify width
                height={40} // Specify height
                style={{ borderRadius: "10%" }}
              />
            )) ||
            (bankName === "Nordea" && (
              <Image
                src={NordeaLogo}
                alt="Handelsbanken Logo"
                width={40} // Specify width
                height={40} // Specify height
                style={{ borderRadius: "10%" }}
              />
            ))}

          <h5 className="text-lg font-semibold">{bankName}</h5>
        </div>

        <div className="my-4 text-center text-xl tracking-widest flex justify-between">
          <p className="text-start text-sm">{cardNumber}</p>
          <p className="text-sm">{cvv}</p>
        </div>

        <div className="flex items-center justify-between">
          <h5 className="text-base font-medium">{cardHolder}</h5>
          <div>
            <p className="text-sm">Valid Thru:</p>
            <p className="text-sm">{validThru}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
