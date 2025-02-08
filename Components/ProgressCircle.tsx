// components/ProgressCircle.tsx
import { CircularProgress, Box, Typography } from '@mui/material';

export default function ProgressCircle() {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        width: '320px',
        height: '320px',
      }}
    >
      {/* الدائرة الرئيسية */}
      <CircularProgress
        variant="determinate"
        value={65}
        thickness={4}
        size="100%"
        sx={{ color: 'custom1' }} // استخدام اللون custom1 (#70c1b3)
      />

      {/* النص في المركز */}
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: 'custom5', fontWeight: 'bold', fontSize: '1.5rem' }} // استخدام اللون custom5 (#50514f)
        >
          65%
        </Typography>
      </Box>

      {/* الحلقات الفرعية */}
      {['Foundation', 'Seeding', 'Referral', 'Rootopia'].map((label, idx) => (
        <Box
          key={label}
          sx={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            border: '4px solid white',
            borderRadius: '50%',
            ...(idx === 0 && { top: '-30px', left: '-30px', borderColor: 'custom1' }), // Foundation (أخضر فاتح)
            ...(idx === 1 && { top: '-30px', right: '-30px', borderColor: 'custom2' }), // Seeding (أزرق غامق)
            ...(idx === 2 && { bottom: '-30px', left: '-30px', borderColor: 'custom3' }), // Referral (أصفر)
            ...(idx === 3 && { bottom: '-30px', right: '-30px', borderColor: 'custom4' }), // Rootopia (أحمر)
            animation: 'pulse 2s infinite',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              fontWeight: 'bold',
              color: 'white',
              fontSize: '0.875rem',
            }}
          >
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}