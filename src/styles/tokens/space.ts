export const space = {
  '0': '0',
  px: '1px',
  '0.5': '0.125rem', // 2px
  '1': '0.25rem', // 4px
  '1.5': '0.375rem',
  '2': '0.5rem', // 8px
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem', // 16px root
  '5': '1.25rem',
  '6': '1.5rem',
  '7': '1.75rem',
  '8': '2rem',
  '9': '2.25rem',
  '10': '2.5rem',
  '11': '2.75rem',
  '12': '3rem',
  '13': '3.25rem',
  '14': '3.5rem',
  '15': '3.75rem',
  '16': '4rem',
  '20': '5rem',
  '24': '6rem',
  '28': '7rem',
  '32': '8rem',
  '36': '9rem',
  '40': '10rem',
  '44': '11rem',
  '48': '12rem',
  '52': '13rem',
  '56': '14rem',
  '60': '15rem',
  '64': '16rem',
  '68': '17rem',
  '72': '18rem',
  '76': '19rem',
  '80': '20rem',
  '96': '24rem',
  auto: 'auto',
  full: '100%',
  fit: 'fit-content',
  max: 'max-content',
  min: 'min-content',
  viewHeight: '100vh',
  viewWidth: '100vw',
  none: '0',

  xs: '0.75rem', // 12px
  sm: '1rem', // 16px
  md: '1.5rem', // 24px
  lg: '1.75rem', // 28px
  xl: '2.5rem', // 40px
  xxl: '3.75rem', // 60px
} as const;

export const smallSpace = {
  '0': '0px',
  px: '1px',
  '0.375': '0.09375rem',
  '0.5': '0.125rem',
  '0.75': '0.1875rem',
  '1': '0.25rem',
  '2': '0.5rem',
  '2.5': '0.625rem',
  '3': '0.75rem',
  '3.5': '0.875rem',
  '4': '1rem', // 16px root
};

export const radius = {
  ...smallSpace,
  full: '9999px',
};
