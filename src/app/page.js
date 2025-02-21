"use client"
import { HeroSection } from "@/Components/HomePage/HeroSection";
import { NavBar } from "@/Components/NavBar/NavBar";
import Auth from "@/Components/Auth/Auth";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/Components/State/store";
import { useEffect } from "react";
import { getUser } from "@/Components/State/Authentication/Action";
import { findCart } from "@/Components/State/Cart/Action";

function HomeContent() {
  const dispatch = useDispatch();
  const jwt = typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    if (jwt || auth.jwt) {
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart(jwt))
    }
  }, [auth.jwt, dispatch, jwt]);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Auth />
    </>
  );
}

// Wrap everything inside the Provider
export default function Home() {
  return (
    <Provider store={store}>
      <HomeContent />
    </Provider>
  );
}
