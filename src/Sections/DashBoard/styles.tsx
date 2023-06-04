import { Button, styled, Typography } from '@mui/material';

export const DashBoardMainContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.customPalette.tagsActive,
    width: '100%',
    height: 'calc(100vh - 70px)',
    gap: '20px',
    padding: '80px 140px 0px 140px',
    [theme.breakpoints.down(768)]: {
        // padding: '0 70px 140px 70px',
      },
  }));


export const TitleContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
    gap: '15px',
    [theme.breakpoints.down(768)]: {
        // padding: '0 70px 140px 70px',
      },
  }));

  export const DashBoardContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '551px',
    backgroundColor: 'white',
    [theme.breakpoints.down(768)]: {
        // padding: '0 70px 140px 70px',
      },
  }));

  export const ButtonMainContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '100%',
    gap: '1px',
    backgroundColor: 'black',
    [theme.breakpoints.down(768)]: {
        // padding: '0 70px 140px 70px',
      },
  }));

  export const DashBoard = styled('div')(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    //overflowY: 'scroll',
    [theme.breakpoints.down(768)]: {
        // padding: '0 70px 140px 70px',
      },
  }));

  export const Table = styled('table')(({ theme }) => ({
    width: '100%',
    height: '100%',
    [theme.breakpoints.down(768)]: {
        // padding: '0 70px 140px 70px',
      },
  }));

  export const MainButton = styled(Button)(({ theme }) => {
    const {
      customSizes: {
        DashBoard: {
          Desktop: { title: titleDesktop },
          Mobile: { title: titleMobile },
        },
      },
      customPalette: {
        white: text,
        primary
      },
    } = theme;

    return {
      width: '100%',
      height: '275px',
      backgroundColor: primary,
      borderRadius: '16px'
    };
  });

  export const TextButton = styled(Typography)(({ theme }) => {
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
      fontSize: '26px',
      fontWeight: titleDesktop.fontWeight,
      lineHeight: titleDesktop.lineHeight,
      color: text,
    };
  });

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