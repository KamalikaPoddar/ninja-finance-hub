export const theme = {
  colors: {
    primary: '#7C3AED', // Purple
    secondary: '#2563EB', // Blue
    tertiary: '#059669', // Green
    background: '#F9FAFB',
    surface: '#FFFFFF',
    error: '#DC2626',
    warning: '#F59E0B',
    success: '#10B981',
    text: {
      primary: '#111827',
      secondary: '#374151',
      tertiary: '#6B7280'
    }
  },
  typography: {
    fontFamily: {
      primary: 'Inter, sans-serif',
      secondary: 'Roboto, sans-serif',
      tertiary: 'Poppins, sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem'
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },
  spacing: {
    px: '1px',
    0.5: '0.125rem',
    1: '0.25rem',
    1.5: '0.375rem',
    2: '0.5rem',
    2.5: '0.625rem',
    3: '0.75rem',
    3.5: '0.875rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    9: '2.25rem',
    10: '2.5rem'
  }
};

export type Theme = typeof theme;