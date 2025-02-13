'use client';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

import { useRouter } from 'next/navigation';
import { getUser, logout } from '../State/Authentication/Action';

const UserProfile = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { user, jwt } = useSelector((state) => state.auth);

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
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col items-center justify-center'>
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className='py-5 text-2xl font-semibold'>
                    {user?.name || "User Name"}
                </h1>
                <p>Email: {user?.email || "User Email"}</p>
                <Button variant='contained' onClick={handleLogout} sx={{ margin: "2rem 0rem" }}>Logout</Button>
            </div>
        </div>
    );
};

export default UserProfile;