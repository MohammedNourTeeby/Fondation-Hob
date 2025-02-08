// components/RewardCard.tsx
interface RewardCardProps {
  title: string;
  amount: number;
  progress: number;
}

export default function RewardCard({ title, amount, progress }: RewardCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-neumorphic transition-all hover:scale-105">
      <h3 className="text-xl font-bold text-primary mb-4">{title}</h3>
      
      <div className="relative h-3 bg-gray-200 rounded-full mb-4">
        <div 
          className="absolute h-full bg-gradient-to-r from-progress to-secondary rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-2xl font-bold text-secondary">
        ${amount.toLocaleString()}
      </div>
    </div>
  );
}