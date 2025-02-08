"use client"; 


import { motion } from "framer-motion";

const plans = [
  { name: "Basic", price: "1 Coin" },
  { name: "Small", price: "50 Coins" },
  { name: "Entry", price: "100 Coins" },
  { name: "Standard", price: "1,000 Coins" },
  { name: "Pro", price: "5,000 Coins" },
  { name: "Max", price: "10,000 Coins" },
];

const Subscription = () => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4">
      {plans.map((plan, index) => (
        <motion.button
          key={index}
          className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-lg shadow-md transition-transform transform hover:scale-110 hover:from-purple-500 hover:to-blue-600 active:scale-95"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {plan.name} - {plan.price}
        </motion.button>
      ))}
    </div>
  );
};

export default Subscription;
