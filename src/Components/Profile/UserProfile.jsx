'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, Typography, Box, Paper, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import { getUser, logout } from '../State/Authentication/Action';
import { keyframes } from '@emotion/react';

// Define a subtle animation for the profile card
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const UserProfile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, jwt } = useSelector((state) => state.auth);
    const theme = useTheme();

    useEffect(() => {
        if (jwt) {
            dispatch(getUser(jwt));
        }
    }, [dispatch, jwt]);

    const handleLogout = () => {
        dispatch(logout());
        router.push('/');
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                borderRadius: "15px",
                justifyContent: 'center',
                alignItems: 'center',
                background: 'radial-gradient(circle, #1a1a1a, #000000)',
                padding: '2rem',
            }}
        >
            <Paper
                elevation={6}
                sx={{
                    padding: '2.5rem',
                    borderRadius: '20px',
                    width: '100%',
                    maxWidth: '450px',
                    background: 'rgba(30, 30, 30, 0.8)',
                    backdropFilter: 'blur(15px)',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    textAlign: 'center',
                    animation: `${fadeIn} 0.8s ease-out`,
                }}
            >
                <AccountCircleIcon
                    sx={{
                        fontSize: '10rem',
                        color: theme.palette.primary.main,
                        filter: 'drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.5))',
                    }}
                />
                <Typography
                    variant='h4'
                    sx={{
                        mt: 2,
                        fontWeight: 'bold',
                        color: 'white', // Alternative to '#fff'
                        textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {user?.name || "User Name"}
                </Typography>
                <Typography
                    variant='body1'
                    sx={{
                        mt: 2,
                        fontWeight: 'bold',
                        color: 'white', // Alternative to '#fff'
                        textShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
                    }}
                >
                    {user?.email || "User Email"}
                </Typography>
                <Button
                    variant='contained'
                    onClick={handleLogout}
                    sx={{
                        mt: 3,
                        padding: '0.75rem 2rem',
                        background: 'linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)',
                        color: '#fff',
                        fontWeight: 'bold',
                        borderRadius: '25px',
                        boxShadow: '0px 4px 15px rgba(255, 65, 108, 0.4)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        '&:hover': {
                            background: 'linear-gradient(135deg, #ff4b2b 0%, #ff416c 100%)',
                            transform: 'scale(1.05)',
                            boxShadow: '0px 6px 20px rgba(255, 65, 108, 0.6)',
                        },
                    }}
                >
                    Logout
                </Button>
            </Paper>
        </Box>
    );
};

export default UserProfile;