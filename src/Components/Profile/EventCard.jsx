import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
    return (
        <Card
            sx={{
                maxWidth: 345,
                borderRadius: 3,
                boxShadow: 5,
                overflow: "hidden",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 10,
                },
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image="https://images.pexels.com/photos/27520510/pexels-photo-27520510/free-photo-of-a-plate-of-food-with-a-drink-on-it.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt="Indian Fast Food"
            />
            <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                    Indian Fast Food
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Experience the rich flavors of traditional Indian street food with a modern twist.
                </Typography>
                <div className="py-2 space-y-2">
                    <p>{"Mangalore"}</p>
                    <p className="text-sm text-blue-500">February 14,2025 12:00 PM</p>
                    <p className="text-sm text-red-500">February 14,2025 04:00 PM</p>
                </div>
            </CardContent>
            {false && <CardActions>
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </CardActions>}
        </Card>
    );
};