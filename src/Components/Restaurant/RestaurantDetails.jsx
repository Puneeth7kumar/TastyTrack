"use client"
import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { RoundedCorner } from '@mui/icons-material';
import MenuCard from './MenuCard';
import Link from 'next/link';

const categories = [
    "Pizza",
    "Burger",
    "Biriyani",
    "Chicken"
]
const foodTypes = [
    { label: "All", value: "all" },
    { label: "Veg only", value: "Veg" },
    { label: "Non-Veg only", value: "Non-Veg" }
];
const menu = [
    1, 1, 1, 1
]
const RestaurantDetails = () => {
    const [foodType, setFoodType] = useState("all");
    const handleFilter = (e) => {
        setFoodType(e.target.value, e.target.name)
    }
    return (
        <div className='bg-black to-gray-500 px-5 lg:px-20'>
            <section className=''>
                <h1 className='text-white'>
                    Home
                </h1>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img
                            className="w-full h-[40vh] object-cover rounded-lg"
                            src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
                            alt="High Definition Image"
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img
                            className="w-full h-[40vh] object-cover rounded-lg"
                            src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
                            alt="High Definition Image"
                        />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img
                            className="w-full h-[40vh] object-cover rounded-lg"
                            src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080"
                            alt="High Definition Image"

                        />
                    </Grid>
                </Grid>
                <div className='pt-3 pb-5'>
                    <h1 className='text-4xl text-gray-400 font-semibold'>Indian Fast Food</h1>
                    <p className='text-gray-600 flex items-center gap-3'>
                        <span>Welcome to Indian's No.1 Fast Food Center</span>
                    </p>
                    <p className='text-gray-600 flex items-center gap-3'>
                        <LocationOnIcon /> <span>Kottara,Mangalore</span>
                    </p>
                    <p className='text-orange-600 flex items-center gap-3'>
                        <CalendarTodayIcon /> <span>Mon-Sun:9:00AM-9:00PM</span>
                    </p>
                </div>
            </section>

            <Divider className='bg-white' />
            <section className='bg-gray-500 pt-[2rem] lg:flex relative '>
                <div className='bg-gray-800 space-y-10 lg:w-[20%] text-white filter p-5 shadow-2xl'>
                    <div className='box space-y-5 lg:sticky top-28 '>
                        <div>
                            <Typography variant='h5' sx={{ paddingBottom: '1rem' }}>
                                Food Type
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={'fieldset'}>
                                <RadioGroup
                                    onChange={handleFilter}
                                    name='food_type'
                                    value={foodType}
                                >
                                    {foodTypes.map((item) => (
                                        <FormControlLabel
                                            key={item.value}
                                            value={item.value}
                                            control={
                                                <Radio
                                                    sx={{
                                                        '& .MuiSvgIcon-root': {
                                                            color: 'white',
                                                        },
                                                        '&.Mui-checked': {
                                                            color: 'blue',
                                                        },
                                                        '&:hover': {
                                                            color: 'lightgray',
                                                        },
                                                    }}
                                                />
                                            }
                                            label={item.label}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Divider className='bg-white' />
                        <div >
                            <Typography variant='h5' sx={{ paddingBottom: "1rem" }} >
                                Food Category
                            </Typography>
                            <FormControl className='py-10 space-y-5' component={'fieldset'}>
                                <RadioGroup onChange={handleFilter} name='food_type' value={foodType || "all"}>
                                    {categories.map((item) => <FormControlLabel key={item} value={item} control={<Radio sx={{
                                        '& .MuiSvgIcon-root': {
                                            color: 'white',
                                        },
                                        '&.Mui-checked': {
                                            color: 'blue',
                                        },
                                        '&:hover': {
                                            color: 'lightgray',
                                        },
                                    }} />} label={item} />)}
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </div>
                </div>
                <Divider className='bg-white' />
                <div className='space-y-5 lg:w-[80%] text-white lg:pl-10 '>
                    {menu.map((item) => <MenuCard />)}
                </div>
            </section>
        </div>
    )
}

export default RestaurantDetails