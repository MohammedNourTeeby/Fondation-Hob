// components/RewardCard.tsx
interface RewardCardProps {
  title: string;
  amount: number;
  progress: number;
}

export default function RewardCard({ title, amount, progress }: RewardCardProps) {
  return (
    <div className="w-72 p-6 bg-white bg-opacity-90 rounded-2xl shadow-lg transition-all hover:scale-105"> {/* زيادة عتامة الخلفية */}
      <h3 className="text-xl font-bold text-custom5 mb-4">{title}</h3> {/* استخدام اللون custom5 (#50514f) */}
      
      <div className="relative h-3 bg-gray-100 rounded-full mb-4"> {/* استخدام لون رمادي فاتح */}
        <div 
          className="absolute h-full bg-gradient-to-r from-custom1 to-custom2 rounded-full" // استخدام الألوان custom1 و custom2
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="text-2xl font-bold text-custom2"> {/* استخدام اللون custom2 (#247ba0) */}
        ${amount.toLocaleString()}
      </div>
    </div>
  );
}