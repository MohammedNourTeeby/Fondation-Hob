"use client";

type ButtonProps = {
    label: string;
    onClick: () => void;
  };
  
  const ActivationButton: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
      <button onClick={onClick} className="px-6 py-3 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 transition">
        {label}
      </button>
    );
  };
  
  export default ActivationButton;