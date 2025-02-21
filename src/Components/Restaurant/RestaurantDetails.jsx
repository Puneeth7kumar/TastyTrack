"use client";
import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useRouter, useSearchParams } from "next/navigation";
import MenuCard from './MenuCard';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantCategory } from '../State/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';


const foodTypes = [
    { label: "All", value: "all" },
    { label: "Veg only", value: "vegetarian" },
    { label: "Non-Veg only", value: "nonveg" },
    { label: "Seasonal", value: "seasonal" }
];


const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const searchParams = useSearchParams();
    const router = useRouter();
    const dispatch = useDispatch();
    const { auth, restaurant, menu } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");
    const [selectedCategory, setSelectedCategory] = useState("")
    const city = searchParams.get("city") || "Unknown";
    const name = searchParams.get("name") || "Unknown Restaurant";
    const id = searchParams.get("id") || "N/A";

    const handleFilter = (e) => {
        setFoodType(e.target.value);
    };
    const handleFilterCategory = (e, value) => {
        setSelectedCategory(value)
        console.log("Selected Category:", e.target.value);
        console.log("Event Target Name:", e.target.name);
    };

    console.log("restaurant", restaurant)
    useEffect(() => {
        dispatch(getRestaurantById({ jwt, restaurantId: id }))
        dispatch(getRestaurantCategory({ jwt, restaurantId: id }))

    }, [])
    useEffect(() => {
        dispatch(getMenuItemsByRestaurantId({ jwt,
             restaurantId: id, 
             vegetarian: foodType === "vegetarian", 
             nonveg: foodType === "nonveg", 
             seasonal: foodType === "seasonal",
              foodCategory: selectedCategory }))
    }, [selectedCategory, foodType])
    return (
        <div className="bg-black to-gray-500 px-5 lg:px-20">
            <section>
                <h1 className="text-white">Home</h1>
                <Grid container spacing={3} className="p-4">
                    {/* Large Hero Image */}
                    <Grid item xs={12}>
                        <div className="w-full h-[60vh] overflow-hidden rounded-2xl shadow-lg">
                            <img
                                className="w-full h-full object-cover transition-transform transform hover:scale-105"
                                src={`${restaurant.restaurant?.images[2]}?auto=compress&cs=tinysrgb&w=1920&h=1080`}
                                alt="Restaurant Image"
                            />
                        </div>
                    </Grid>

                    {/* Two Smaller Side-by-Side Images */}
                    <Grid item xs={12} md={6}>
                        <div className="w-full h-[50vh] overflow-hidden rounded-2xl shadow-md">
                            <img
                                className="w-full h-full object-cover transition-transform transform hover:scale-105"
                                src={`${restaurant.restaurant?.images[0]}?auto=compress&cs=tinysrgb&w=1920&h=1080`}
                                alt="Restaurant Image"
                            />
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className="w-full h-[50vh] overflow-hidden rounded-2xl shadow-md">
                            <img
                                className="w-full h-full object-cover transition-transform transform hover:scale-105"
                                src={`${restaurant.restaurant?.images[1]}?auto=compress&cs=tinysrgb&w=1920&h=1080`}
                                alt="Restaurant Image"
                            />
                        </div>
                    </Grid>
                </Grid>

                <div className="pt-3 pb-5">
                    <h1 className="text-4xl text-gray-400 font-semibold">{restaurant.restaurant?.name}</h1>
                    <p className="text-gray-600 flex items-center gap-3">
                        <span>{restaurant.restaurant?.description}</span>
                    </p>
                    <p className="text-gray-600 flex items-center gap-3">
                        <LocationOnIcon /> <span>{decodeURIComponent(city)}</span>
                    </p>
                    <p className="text-orange-600 flex items-center gap-3">
                        <CalendarTodayIcon /> <span>Mon-Sun: 9:00AM - 9:00PM</span>
                    </p>
                </div>
            </section>

            <Divider className="bg-white" />

            <section className="bg-gray-500 pt-[2rem] lg:flex relative">
                <div className="bg-gray-800 space-y-10 lg:w-[20%] text-white filter p-5 shadow-2xl">
                    <div className="box space-y-5 lg:sticky top-28">
                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: '1rem' }}>
                                Food Type
                            </Typography>
                            <FormControl className="py-10 space-y-5" component="fieldset">
                                <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={
                                                <Radio
                                                    sx={{
                                                        '& .MuiSvgIcon-root': { color: 'white' },
                                                        '&.Mui-checked': { color: 'blue' },
                                                        '&:hover': { color: 'lightgray' },
                                                    }}
                                                />
                                            }
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <Divider className="bg-white" />

                        <div>
                            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                                Food Category
                            </Typography>
                            <FormControl className="py-10 space-y-5" component="fieldset">
                                <RadioGroup
                                    onChange={handleFilterCategory}
                                    name="food_type"
                                    value={selectedCategory}
                                >
                                    {restaurant.categories.map((item, index) => (
                                        <FormControlLabel
                                            key={item.id || item.name || index}
                                            value={item.name}
                                            control={
                                                <Radio
                                                    sx={{
                                                        '& .MuiSvgIcon-root': { color: 'white' },
                                                        '&.Mui-checked': { color: 'blue' },
                                                        '&:hover': { color: 'lightgray' },
                                                    }}
                                                />
                                            }
                                            label={item.name}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>

                <Divider className="bg-white" />

                <div className="space-y-5 lg:w-[80%] text-white lg:pl-10">
                    {menu.menuItems.map((item, index) => (
                        <MenuCard key={item.id || index} item={item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default RestaurantDetails;
