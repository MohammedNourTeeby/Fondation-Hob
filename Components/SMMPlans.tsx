// components/SMMPlans.tsx
interface SMMPlan {
  title: string;
  price: number;
  features: string[];
  color: string;
}

export default function SMMPlans() {
  const plans: SMMPlan[] = [
    {
      title: 'ESSENTIAL',
      price: 159,
      features: ['Low-risk solution', 'Ideal for startups'],
      color: 'bg-custom1' // استخدام اللون custom1 (#70c1b3)
    },
    {
      title: 'STANDARD',
      price: 359,
      features: ['Modern strategies', 'Reasonable price'],
      color: 'bg-custom2' // استخدام اللون custom2 (#247ba0)
    },
    {
      title: 'PREMIUM',
      price: 559,
      features: ['Enhanced approach', 'Wide-reaching'],
      color: 'bg-custom3' // استخدام اللون custom3 (#ffe066)
    },
  ];

  return (
    <div className="w-full grid gap-8 md:grid-cols-3">
      {plans.map((plan) => (
        <div 
          key={plan.title}
          className="relative overflow-hidden bg-white bg-opacity-90 rounded-2xl shadow-xl group"
        >
          <div className={`${plan.color} h-32 flex items-center justify-center`}>
            <h3 className="text-3xl font-bold text-white">{plan.title}</h3>
          </div>

          <div className="p-6">
            <div className="mb-6 text-center">
              <span className="text-4xl font-bold text-custom5">${plan.price}</span> {/* استخدام اللون custom5 (#50514f) */}
              <span className="text-gray-500">/mo</span>
            </div>

            <ul className="mb-8 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-custom5"> {/* استخدام اللون custom5 (#50514f) */}
                  <div className="w-2 h-2 mr-2 bg-custom2 rounded-full"/> {/* استخدام اللون custom2 (#247ba0) */}
                  {feature}
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 font-semibold text-white ${plan.color} rounded-xl hover:opacity-90 transition-all`}> {/* استخدام لون الخطة للزر */}
              GET STARTED
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}