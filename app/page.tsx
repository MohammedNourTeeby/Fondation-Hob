// pages/index.tsx
import type { NextPage } from 'next';
import { Typography } from '@mui/material';
import ProgressCircle from '@/Components/ProgressCircle';
import RewardCard from '@/Components/RewardCard';
import TierSelector from '@/Components/TierSelector';
import SMMPlans from '@/Components/SMMPlans';
import './globals.css';


const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-custom-gradient py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center"> {/* استخدام التدرج اللوني */}
      <div className="max-w-7xl mx-auto text-center">
        {/* النص في أعلى الصفحة */}
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: 'white', // استخدام اللون الأبيض
            fontSize: '2.5rem',
            marginBottom: '2rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // إضافة ظل للنص
          }}
        >
          FOUNDATION Page
        </Typography>

        {/* الدائرة في المنتصف */}
       

        {/* بطاقات المكافآت */}
        <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <RewardCard title="Foundation" amount={27000} progress={65} />
          <RewardCard title="Seeding" amount={8600} progress={40} />
          <RewardCard title="Referral" amount={79500} progress={85} />
          <RewardCard title="Rootopia" amount={1800000} progress={95} />
        </div>
        <div className="mb-12">
          <ProgressCircle />
        </div>
        {/* خطط العضوية */}
        <div className="mb-12">
          <TierSelector />
        </div>

        {/* خطط SMM */}
        <div>
          <SMMPlans />
        </div>
      </div>
    </div>
  );
};

export default Home;