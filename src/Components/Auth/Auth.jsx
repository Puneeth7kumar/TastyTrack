"use client";
import { Box, Modal } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { style } from "../Cart/Cart";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Auth = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const authType = searchParams.get("auth"); 

    const isAuthModalOpen = authType === "login" || authType === "register";
    const handleClose = () => {
        router.push("/"); 
    };
    return (
        <Modal open={isAuthModalOpen} onClose={handleClose}>
            <Box sx={style}>
                {authType === "register" && <RegisterForm />}
                {authType === "login" && <LoginForm />}
            </Box>
        </Modal>
    );
};

export default Auth;