"use client"; 


import React from "react";

interface GlowingCardProps {
  title: string;
  icon: string;
  value: string;
}

const GlowingCard: React.FC<GlowingCardProps> = ({ title, icon, value }) => {
  return (
    <div className="relative bg-gray-900 text-white p-6 rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-teal-500 opacity-25 rounded-lg blur-lg"></div>
      <div className="relative z-10 text-center">
        <div className="text-3xl">{icon}</div>
        <h2 className="mt-2 text-lg font-semibold">{title}</h2>
        <p className="mt-1 text-xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default GlowingCard;
