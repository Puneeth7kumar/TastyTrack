"use client";
import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery, IconButton, Typography, Box, Divider, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import EventIcon from "@mui/icons-material/Event";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

const menu = [
    { title: "Orders", icon: <ShoppingBagIcon fontSize="large" />, key: "Orders" },
    { title: "Favorites", icon: <FavoriteIcon fontSize="large" />, key: "Favorites" },
    { title: "Address", icon: <HomeIcon fontSize="large" />, key: "Address" },
    { title: "Payment", icon: <AccountBalanceWalletIcon fontSize="large" />, key: "Payment" },
    { title: "Notifications", icon: <NotificationsActiveIcon fontSize="large" />, key: "Notifications" },
    { title: "Events", icon: <EventIcon fontSize="large" />, key: "Events" },
    { title: "Logout", icon: <LogoutIcon fontSize="large" />, key: "Logout" },
];

const ProfileNavigation = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeSection = searchParams.get("section") || "Orders";
    const isDesktop = useMediaQuery("(min-width:600px)");
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleNavigationClick = (item) => {
        if (item.key === "Logout") {
            dispatch(logout()); // Dispatch the logout action
            router.push("/"); // Redirect to the home page
        }
        if (!isDesktop) {
            setDrawerOpen(false); // Close the drawer on mobile
        }
    };

    return (
        <Box>
            {/* Mobile Menu Button - Positioned below navbar */}
            {!isDesktop && (
                <IconButton
                    onClick={() => setDrawerOpen(true)}
                    sx={{
                        position: "fixed",
                        top: 70,
                        left: 16,
                        zIndex: 40,
                        backgroundColor: "white",
                        boxShadow: 3,
                        borderRadius: "50%",
                        "&:hover": {
                            backgroundColor: "white",
                            boxShadow: 6,
                        },
                    }}
                >
                    <MenuIcon sx={{ fontSize: "32px", color: "text.primary" }} />
                </IconButton>
            )}

            {/* Desktop Sidebar */}
            <Drawer
                variant={isDesktop ? "permanent" : "temporary"}
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                anchor="left"
                sx={{
                    zIndex: 40,
                    width: isDesktop ? "260px" : "75vw",
                    "& .MuiDrawer-paper": {
                        width: isDesktop ? "260px" : "75vw",
                        backgroundColor: "background.paper",
                        boxShadow: "4px 0 10px rgba(0,0,0,0.1)",
                        borderRight: "none",
                        position: "fixed",
                        top: isDesktop ? "100px" : "20px",
                        left: 0,
                        height: isDesktop ? "calc(100vh - 80px)" : "100vh",
                        transition: "all 0.3s ease-in-out",
                        padding: isDesktop ? "20px 15px" : "10px",
                    },
                }}
            >
                <Box className="flex flex-col h-full">
                    {!isDesktop && (
                        <Box display="flex" justifyContent="flex-end" p={1}>
                            <IconButton onClick={() => setDrawerOpen(false)}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    )}

                    {menu.map((item, i) => (
                        <React.Fragment key={item.key}>
                            <Link
                                href={item.key === "Logout" ? "/" : `/profile?section=${item.key}`} // Use "#" for logout to prevent navigation
                                onClick={() => handleNavigationClick(item)} // Pass the item to handleNavigationClick
                                className={`flex items-center space-x-4 cursor-pointer py-3 px-4 rounded-lg transition-all duration-300 
                                    ${activeSection === item.key ? "bg-gray-800 text-white" : "hover:bg.grey[100]"}`}
                            >
                                {React.cloneElement(item.icon, {
                                    sx: {
                                        color: activeSection === item.key ? "white" : "text.secondary",
                                        transition: "color 0.3s ease",
                                    },
                                })}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 600,
                                        color: activeSection === item.key ? "white" : "text.primary",
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Link>
                            {i !== menu.length - 1 && <Divider sx={{ my: 1 }} />}
                        </React.Fragment>
                    ))}
                </Box>
            </Drawer>
        </Box>
    );
};

export default ProfileNavigation;