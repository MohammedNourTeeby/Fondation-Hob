'use client';
import { motion } from 'framer-motion';

type Props = {
  label: string;
  value: number;
  max: number;
};

const CircularProgress: React.FC<Props> = ({ label, value, max }) => {
  const percentage = (value / max) * 100;
  return (
    <div className="relative w-40 h-40">
      <svg className="w-full h-full" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" stroke="#ddd" strokeWidth="8" fill="none" />
        <motion.circle
          cx="50"
          cy="50"
          r="40"
          stroke="#4CAF50"
          strokeWidth="8"
          fill="none"
          strokeDasharray={`${percentage}, 100`}
          initial={{ strokeDasharray: "0, 100" }}
          animate={{ strokeDasharray: `${percentage}, 100` }}
          transition={{ duration: 1 }}
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-lg font-bold">{label}</p>
        <p>{value} / {max}</p>
      </div>
    </div>
  );
};

export default CircularProgress;