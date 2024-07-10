import React, { useState } from "react";
import bgPattern from "../images/bg-pattern.svg";
import iconCheck from "../images/icon-check.svg";
import bgImage from "../images/pattern-circles.svg"; 

const pricingData = [
  { views: "10K", price: 8 },
  { views: "50K", price: 12 },
  { views: "100K", price: 16 },
  { views: "500K", price: 24 },
  { views: "1M", price: 36 },
];

const PricingCard = () => {
  //Hello 
  const [index, setIndex] = useState(10); 
  const [yearlyBilling, setYearlyBilling] = useState(false);

  const { views, price } = pricingData[index];
  const finalPrice = yearlyBilling ? price * 0.75 : price;

  const handleSliderChange = (e) => {
    setIndex(Number(e.target.value));
  };

  const handleToggleChange = () => {
    setYearlyBilling(!yearlyBilling);
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className="relative flex flex-col justify-center items-center text-center pt-4 pb-16 mt-16 h-[95%] w-[80%] rounded-lg shadow-xl"
        style={{
          backgroundImage: `url(${bgPattern})`,
          backgroundSize: "contain",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          height: "20%",
        }}
      >
        <h2 className="relative text-4xl font-bold pb-2 pt-12 z-20">
          Simple, traffic-based pricing
        </h2>
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-50"
          style={{ 
             backgroundImage: `url(${bgImage})` ,
             height:`120px`,
             width:`100px`,
             position:`absolute`,
             top:`4%`,
             left:`40%`,
             fontSize:``
             }}
        ></div>
        <p className="relative mb-8 text-grayish-blue text-lg z-20">
          Sign-up for our 30-day trial. No credit card required.
        </p>
        <div className="relative z-10 bg-white p-8 rounded-lg shadow-xl w-full max-w-xl text-center">
          <div className="p-8 rounded-lg mb-2 bg-whiter">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 text-grayish-blue">
                <span className="text-sm">{views} PAGEVIEWS</span>
              </div>
              <div className="flex items-center justify-center mb-6">
                <span className="text-4xl font-bold text-dark-desaturated-blue">
                  ${finalPrice.toFixed(2)}
                </span>
                <span className="text-xl text-grayish-blue">/ month</span>
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="4"
              value={index}
              onChange={handleSliderChange}
              style={{
                width: "100%",
                height: "5px",
                borderRadius: "9999px",
                appearance: "none",
                cursor: "pointer",
                background: `linear-gradient(to right, #06b6d4, #06b6d4)`,
              }}
              className="appearance-none"
            />
            <div className="flex items-center p-2 justify-between mt-6">
              <span className="text-grayish-blue">Monthly Billing</span>
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={yearlyBilling}
                    onChange={handleToggleChange}
                    className="sr-only"
                  />
                  <div className="block w-14 h-8 rounded-full bg-toggle-background"></div>
                  <div
                    className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                      yearlyBilling ? "transform translate-x-6" : ""
                    }`}
                  ></div>
                </div>
                <span className="ml-6 text-grayish-blue">Yearly Billing</span>
              </label>
              <span className="px-2 py-0.5 rounded text-light-red bg-light-grayish-red text-sm">
                25% discount
              </span>
            </div>
          </div>
          <hr />
          <div className="flex flex-col sm:flex-row justify-between items-center mt-8">
            <div className="text-grayish-blue text-start flex flex-col gap-1">
              <p className="flex gap-2 items-center">
                <img
                  src={iconCheck}
                  className="h-[18px] w-[15px]"
                  alt="check-image"
                />
                Unlimited websites
              </p>
              <p className="flex gap-2 items-center">
                <img
                  src={iconCheck}
                  className="h-[18px] w-[15px]"
                  alt="check-image"
                />
                100% data ownership
              </p>
              <p className="flex gap-2 items-center">
                <img
                  src={iconCheck}
                  className="h-[18px] w-[15px]"
                  alt="check-image"
                />
                Email reports
              </p>
            </div>
            <div className="pt-4 sm:pt-0">
            <button className="text-lg font-medium bg-blue-950 text-white py-2 px-6 rounded-full">
              Start my trial
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
