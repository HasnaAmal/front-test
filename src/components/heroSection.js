"use client";
import Image from "next/image";
import { useState } from "react";

export default function HeroSection() {
  const [unit, setUnit] = useState("metric");
  const [height, setHeight] = useState("185");
  const [weight, setWeight] = useState("80");
  const [bmi, setBmi] = useState("23.4");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w)) return;
    let bmiValue = unit === "metric" ? w / ((h / 100) ** 2) : (w / (h * h)) * 703;
    setBmi(bmiValue.toFixed(1));
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
    calculateBMI();
  };
  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    calculateBMI();
  };
  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    calculateBMI();
  };

  return (
    <section className="relative flex flex-col items-center lg:block">
      {/* Hero div */}
      <div
        className="
          flex flex-col justify-center
          w-full lg:w-269.5
          h-160 sm:h-160 lg:h-181.25
          rounded-b-4xl
          items-center lg:items-start
          text-center lg:text-left
        "
        style={{
          background:
            "linear-gradient(290.1deg, #D6E6FE 0%, rgba(214, 252, 254, 0) 100%)",
        }}
      >
        <Image
          src="/logo.png"
          alt="BMI Background"
          width={64}
          height={64}
          className="mt-18.75 mb-10 lg:mb-31.75 lg:ml-29"
        />
        <h1 className="text-[48px] lg:text-[64px] font-semibold leading-[110%] tracking-[-0.05em] text-[#253347] lg:ml-29">
          Body Mass <span className="block">Index Calculator</span>
        </h1>
        <p className="text-[#5E6E85] max-w-116.25 font-normal text-base leading-[150%] mt-6 lg:mt-13.25 lg:ml-29">
          Better understand your weight in relation to your height using our body
          mass index (BMI) calculator. While BMI is not the sole determinant of a
          healthy weight, it offers a valuable starting point to evaluate your
          overall health and well-being.
        </p>
      </div>

      <div
        className="
          sm:mt-63.5
          sm:w-172.5
          sm:left-1/2 sm:-translate-x-1/2
          sm:static 
          lg:absolute lg:top-21.5 lg:right-50 lg:translate-x-0 lg:w-141
          bg-white rounded-2xl p-8
        "
        style={{ boxShadow: "16px 32px 56px 0px #8FAECF40" }}
      >
        <h2 className="text-[#253347] font-semibold text-[24px] tracking-[-0.05em] mb-6">
          Enter your details below
        </h2>

        <div className="flex items-center gap-6 mb-8">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="unit"
              checked={unit === "metric"}
              onChange={() => handleUnitChange("metric")}
              className="w-6 h-6 accent-blue-600"
            />
            <span className="font-medium text-lg">Metric</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="radio"
              name="unit"
              checked={unit === "imperial"}
              onChange={() => handleUnitChange("imperial")}
              className="w-6 h-6 accent-blue-600"
            />
            <span className="font-medium text-lg">Imperial</span>
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-gray-500 mb-2 block">Height</label>
            <div className="flex items-center border rounded-xl p-4">
              <input
                type="number"
                value={height}
                onChange={handleHeightChange}
                className="w-full text-right text-2xl font-semibold focus:outline-none"
              />
              <span className="ml-2 text-blue-600 font-medium">
                {unit === "metric" ? "cm" : "in"}
              </span>
            </div>
          </div>

          <div>
            <label className="text-gray-500 mb-2 block">Weight</label>
            <div className="flex items-center border rounded-xl p-4">
              <input
                type="number"
                value={weight}
                onChange={handleWeightChange}
                className="w-full text-right text-2xl font-semibold focus:outline-none"
              />
              <span className="ml-2 text-blue-600 font-medium">
                {unit === "metric" ? "kg" : "lb"}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-r from-[#345FF7] to-[#587DFF] text-white rounded-r-[50px] rounded-l-xl p-8">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <p className="text-lg mb-2">Your BMI is...</p>
              <p className="text-5xl font-bold">{bmi}</p>
            </div>
            <p className="text-lg max-w-sm">
              Your BMI suggests you're a healthy weight. Your ideal weight is
              between <span className="font-semibold">63.3kgs - 85.2kgs</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}