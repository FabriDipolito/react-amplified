import { styled } from '@mui/material/styles';
import { Authenticator } from '@aws-amplify/ui-react';

export const AuthenticatorContainer = styled(Authenticator)(({ theme }) => ({
        // const {
    // customPallete: {
    //     background: { main },
    // },
    // } = theme;
    // return {    
    justifyContent: 'end',
    height: '100vh',
    backgroundColor: '#3AAAFE',
    '& div': {
        height: 'fit-content',
        '& div': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100vh',
            '& div': {
                height: 'fit-content',
                '& div': {
                    height: '100%',
                },
            },
        },
    },
    '.amplify-field__show-password': {
        display: 'none',
    },
    '.amplify-button--primary': {
        borderRadius: '16px',
        marginTop: '30px',
        width: '250px',
        alignSelf: 'center',
        backgroundColor: '#3AAAFE'
    },
    '.amplify-button--small': {
        color: '#3AAAFE'
    }
    //};
  }));
