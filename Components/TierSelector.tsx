// components/TierSelector.tsx
interface Tier {
  coins: number;
  benefits: string[];
}

export default function TierSelector() {
  const tiers: Tier[] = [
    { coins: 1, benefits: ['Basic Membership', 'Referral Rewards'] },
    { coins: 50, benefits: ['Early Access Updates'] },
    { coins: 100, benefits: ['Boosted Earnings'] },
  ];

  const buttonColors = ['bg-custom1', 'bg-custom2', 'bg-custom3']; // ألوان الأزرار

  return (
    <div className="w-full grid gap-6 md:grid-cols-3">
      {tiers.map((tier, index) => (
        <div 
          key={tier.coins}
          className="p-8 bg-white bg-opacity-90 rounded-3xl shadow-lg border-2 border-transparent hover:border-custom1 transition-all"
        >
          <div className="text-center mb-6">
            <span className="text-4xl font-bold text-custom5"> {/* استخدام اللون custom5 (#50514f) */}
              {tier.coins}
            </span>
            <span className="text-xl text-custom2"> Coins</span> {/* استخدام اللون custom2 (#247ba0) */}
          </div>

          <ul className="mb-6 space-y-3">
            {tier.benefits.map((benefit) => (
              <li key={benefit} className="flex items-center text-custom5"> {/* استخدام اللون custom5 (#50514f) */}
                <svg className="w-5 h-5 mr-2 text-custom1" fill="currentColor" viewBox="0 0 20 20"> {/* استخدام اللون custom1 (#70c1b3) */}
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                </svg>
                {benefit}
              </li>
            ))}
          </ul>

          <button className={`w-full py-3 font-semibold text-white ${buttonColors[index]} rounded-xl hover:opacity-90 transition-all`}> {/* استخدام لون مختلف لكل زر */}
            Activate Now
          </button>
        </div>
      ))}
    </div>
  );
}