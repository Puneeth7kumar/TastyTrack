"use client";
import React, { useEffect } from "react";
import MultiItemCarousel from "./MultiItemCarousel";
import RestaurantCard from "../Restaurant/RestaurantCard";
import Link from "next/link";
import Auth from "../Auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../State/Restaurant/Action";
import { useRouter } from "next/navigation";
import { findCart } from "../State/Cart/Action";

const restaurants = [1, 1, 1, 1];

const HeroSection = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const { restaurant } = useSelector(store => store)
    console.log("restaurant", restaurant)
    useEffect(() => {
        const jwt = localStorage.getItem("jwt")
        dispatch(getAllRestaurantsAction(jwt))
        
    }, [])

    return (
        <div>
            <section
                className="bg-fixed bg-center min-h-screen py-12 "
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/1435895/pexels-photo-1435895.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    opacity: "40",
                }}
            >
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 px-10 ">
                        <div className=""> <h1 className="text-6xl from-neutral-950 font-semibold mb-4 text-black shadow-lg font-serif">
                            Order your favourite Foods
                        </h1></div>
                        <p className="text-white mb-6 leading-relaxed font-bold">
                            Fresh and tasty seafood curry sit amet, consectetur Curabitur
                            accumsan auctor pulvinar proin sit amet.
                        </p>
                        <div className="flex items-center space-x-4">
                            <Link href="/menu">
                                <span className="text-2xl font-bold text-black cursor-pointer hover:underline ">
                                    Explore now
                                </span>
                            </Link>
                            <Link href="/restaurant-details">
                                <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
                                    Buy Now
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 mt-6 lg:mt-0">
                        <img
                            src="/download.png"
                            alt="Delicious Food"
                            className="rounded-3xl shadow-lg transform hover:scale-105 transition duration-300"
                        />
                    </div>
                </div>
            </section>
            <section className="bg-gray-950 p-10 lg:py-10 lg:px-20">
                <p className="text-2xl font-semibold text-gray-500 py-3 pb-10">
                    Top Meals
                </p>
                <MultiItemCarousel />
            </section>
            <section className="bg-black px-5 lg:px-20 pt-5">
                <h1 className="text-2xl font-semibold text-gray-400 py-3 pb-5">
                    Order From Our Favorites
                </h1>
                <div className="flex flex-wrap items-center justify-around gap-5">
                    {restaurant.restaurants.map((item, index) => (

                        <RestaurantCard item={item} />

                    ))}
                </div>
            </section>
        </div>
    );
};

export { HeroSection };