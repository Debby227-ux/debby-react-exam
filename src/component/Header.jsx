import React from "react";;
import { HeroData } from "../data/HeroData.js";

export default function Header() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 ">
      <div>
        <h1 className="text-2xl ml-120">GET OUR SERVICES</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">

        {HeroData.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <img
              src={item.image}   // ✅ FIXED
              alt={item.title}
              className="w-full h-48 object-cover"
            />

            {/* Text */}
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

