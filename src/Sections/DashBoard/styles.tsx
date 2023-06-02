import { styled, Typography } from '@mui/material';

export const DashBoardContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.customPalette.tagsActive,
    width: '100%',
    height: '100vh',
    padding: '80px 140px 140px 140px',
    [theme.breakpoints.down(768)]: {
        // padding: '0 70px 140px 70px',
      },
  }));

export const Title = styled(Typography)(({ theme }) => {
    const {
      customFonts: { poppinsExtraBold },
      customSizes: {
        DashBoard: {
          Desktop: { title: titleDesktop },
          Mobile: { title: titleMobile },
        },
      },
      customPalette: {
        white: text,
      },
    } = theme;
  
    return {
      [theme.breakpoints.down(768)]: {
        fontSize: titleMobile.fontSize,
        fontWeight: titleMobile.fontWeight,
        lineHeight: titleMobile.lineHeight,
      },
      fontFamily: poppinsExtraBold,
      fontSize: titleDesktop.fontSize,
      fontWeight: titleDesktop.fontWeight,
      lineHeight: titleDesktop.lineHeight,
      color: text,
    };
  });