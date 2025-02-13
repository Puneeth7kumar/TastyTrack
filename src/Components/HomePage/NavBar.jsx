import { Avatar, Badge, IconButton } from '@mui/material';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = () => {
    return (
        <div className="bg-gradient-to-r from-black via-gray-800 to-black lg:py-6 rounded-md sticky top-0 z-50 shadow-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <div className="flex justify-between items-center max-w-screen-xl mx-auto px-8 w-full">

                <a href="#" className="flex items-center">
                    <img
                        src="https://img.freepik.com/free-psd/restaurant-logo-design_23-2151249859.jpg?t=st=1737356867~exp=1737360467~hmac=a62b3cf76bba475404aea8ab33d5f36798036a299e2a7302e8d7c41f6f777d3f&w=740"
                        className="h-10 sm:h-12 rounded-full shadow-md"
                        alt="TastyTrack Logo"
                    />
                    <span className="ml-3 text-xl font-bold text-white">TastyTrack</span>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <a href="/" className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">Home</a>
                    <a href="#" className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">Menu</a>
                    <a href="#" className="text-lg font-semibold text-white hover:text-gray-200 transition duration-300">Service</a>
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: 'white' }} />
                    </IconButton>
                </div>

                <div className="flex items-center space-x-4">
                    <Avatar sx={{ bgcolor: "white", color: "blueviolet", border: "2px solid blueviolet" }} />
                    <Badge color='secondary' badgeContent={3}>
                        <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: 'white' }} />
                    </Badge>
                </div>
            </div>
        </div>
    );
};

export { NavBar };
