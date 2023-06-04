/* eslint-disable @typescript-eslint/no-empty-interface */
import { createTheme } from '@mui/material/styles';

interface CustomTheme {

  customFonts: {
    poppinsLight: string;
    poppins: string;
    poppinsBold: string;
    poppinsExtraBold: string;
  };

  customPalette: {
    
    // Palette of Colors
    primary: string;
    secondary: string;
    secondaryDark: string;
    hover: string;
    disabled: string;
    tagsDefault: string;
    tagsActive: string;
    darkGrey: string;
    darkMediumGrey: string;
    mediumGrey: string;
    mediumLightGrey: string;
    lightGrey: string;
    white: string;
    error: string;
    lightRed: string;
    success: string;
    lightGreen: string;
    // Palette of Colors

  };

  customSizes: {

    DashBoard: {
      Desktop: {
        title: {
          fontSize: string;
          fontWeight: number | string;
          lineHeight: string;
        };
      };
      Mobile: {
        title: {
          fontSize: string;
          fontWeight: number | string;
          lineHeight: string;
        };
      };
    };

    // Sizes Components
    button: {
      primary: {
        fontSize: string;
        fontWeight: number | string;
        lineHeight: string;
      };
      secondary: {
        fontSize: string;
        fontWeight: number | string;
        lineHeight: string;
      };
    };

    textField: {
      text: {
        fontSize: string;
        fontWeight: number | string;
        lineHeight: string;
      };
      label: {
        fontSize: string;
        fontWeight: number | string;
        lineHeight: string;
      };
    };
    // Sizes Components
    
  };
}

// allow configuration using `createTheme`
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}

  // allow configuration using `createTheme`
  interface ThemeOptions extends CustomTheme {}
}
const theme = createTheme({  
  
   // Fonts 

  // Default font
  typography: {
    fontFamily: 'Poppins',
  },

  customFonts: {
    poppinsLight: 'Poppins-Light',
    poppins: 'Poppins',
    poppinsBold: 'Poppins-Bold',
    poppinsExtraBold: 'Poppins-ExtraBold',
  },
  // Fonts

  customPalette: {
    
    // Palette of Colors
    primary: '#3AAAFE',
    secondary: '#5D5DF6',
    secondaryDark: '#3F3FFF',
    hover: '#8686FE',
    disabled: '#CECEFC',
    tagsDefault: '#EDEDFF',
    tagsActive: '#CECEFF',
    darkGrey: '#3E3E3E',
    darkMediumGrey: '#535353',
    mediumGrey: '#BABABA',
    mediumLightGrey: '#DCDCDC',
    lightGrey: '#F5F5F5',
    white: '#FFFFFF',
    error: '#FE1A38',
    lightRed: '#FFE8EB',
    success: '#009944',
    lightGreen: '#E6F5EC',
    // Palette of Colors

  },
  customSizes: {

    DashBoard: {
      Desktop: {
        title: {
          fontSize: '42px',
          fontWeight: 600,
          lineHeight: '32px',
        },
      },
      Mobile: {
        title: {
          fontSize: '42px',
          fontWeight: 600,
          lineHeight: '32px',
        },
      },
    },

    // Sizes Components
    button: {
      primary: {
        fontSize: '17px',
        fontWeight: 500,
        lineHeight: '32px'
      },
      secondary: {
        fontSize: '15px',
        fontWeight: 500,
        lineHeight: '24px'
      },
    },

    textField: {
      text: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '24px'
      },
      label: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '24px'
      },
    },
    // Sizes Components

  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          scroll-behavior: smooth;
        }
        @font-face {
          font-family: 'Poppins';
          src: url('/fonts/Poppins-Regular.ttf') format('truetype');
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Poppins-Bold';
          src: url('/fonts/Poppins-Bold.ttf') format('truetype');
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Poppins-ExtraBold';
          src: url('/fonts/Poppins-ExtraBold.ttf') format('truetype');
          font-display: swap;
        }
        
        @font-face {
          font-family: 'Poppins-Light';
          src: url('/fonts/Poppins-Light.ttf') format('truetype');
          font-display: swap;
        }
      `,
    },
  },
});

export default theme;