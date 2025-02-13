"use client"
import { Avatar, Badge, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { Person } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { store } from '../State/store';
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const router = useRouter();
    const { auth } = useSelector(store => store);

    // State to handle login popup
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    // Function to handle avatar click
    const handleAvatarClick = () => {
        if (!auth.user) {
            // Show login popup if user is not registered
            setIsLoginOpen(true);
        } else if (auth.user.role === "ROLE_CUSTOMER") {
            router.push("/profile");
        } else {
            router.push("/admin/restaurant");
        }
    };

    return (
        <div className="bg-gradient-to-r from-black via-gray-800 to-black lg:py-6 rounded-md sticky top-0 z-50 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 w-full">

                <Link href="/" className="flex items-center">
                    <img
                        src="https://img.freepik.com/free-psd/restaurant-logo-design_23-2151249859.jpg?t=st=1737356867~exp=1737360467~hmac=a62b3cf76bba475404aea8ab33d5f36798036a299e2a7302e8d7c41f6f777d3f&w=740"
                        className="h-10 sm:h-12 rounded-full shadow-md"
                        alt="TastyTrack Logo"
                    />
                    <span className="ml-3 text-xl font-bold text-white">TastyTrack</span>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">Home</Link>
                    <Link href="/menu" className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">Menu</Link>
                    <Link href="/" className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">Events</Link>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: 'white' }} />
                    </IconButton>
                </div>

                <div className="flex items-center space-x-4">
                    <IconButton onClick={handleAvatarClick} sx={{ color: "blueviolet", border: "2px solid blueviolet" }}>
                        {auth.user ? (
                            <Avatar sx={{ bgcolor: "white", color: "blueviolet", border: "2px solid blueviolet" }}>
                                {auth.user?.name[0].toUpperCase()}
                            </Avatar>
                        ) : (
                            <Person />
                        )}
                    </IconButton>

                    <Link href="/cart">
                        <Badge color='secondary' badgeContent={3}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: 'white', cursor: "pointer" }} />
                        </Badge>
                    </Link>
                </div>
            </div>

            {/* Login Popup */}
            <Dialog open={isLoginOpen} onClose={() => setIsLoginOpen(false)}>
                <DialogTitle>User Login</DialogTitle>
                <DialogContent>
                    {/* You can replace this with a Login Form component */}
                    <p>Please log in or register to continue.</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => router.push("/?auth=login")} color="primary">
                        Login/Register
                    </Button>
                    <Button onClick={() => setIsLoginOpen(false)} color="secondary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export { NavBar };
