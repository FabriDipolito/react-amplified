import { styled } from '@mui/material/styles';
import { Button } from '@aws-amplify/ui-react';

export const HeaderContainer = styled('div')(({ theme }) => ({
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
height: '80px',
backgroundColor: '#3AAAFE',
}));

export const LogoContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '30px',
    marginRight: '20px',
    cursor: 'pointer',
    height: '80px',
    }));

export const LinkContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '10%',
    height: '80px',
    width: '100%',
    }));

export const ButtonContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    height: '80px',
    }));

export const ButtonSignOut = styled(Button)(({ theme }) => ({
    display: 'flex',
    height: '80px',
    }));