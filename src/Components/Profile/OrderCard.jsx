import { Button, Card } from '@mui/material';
import React from 'react';

export const OrderCard = ({ item }) => {
    console.log("order card item", item)
    return (
        <Card
            className="flex justify-between items-center p-5"
            sx={{
                background: "linear-gradient(135deg, white, white)",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                },
            }}
        >
            <div className="flex items-center space-x-5">
                <img
                    className="h-16 w-16 object-cover rounded-full"
                    src={item?.food?.images[0]}
                    alt="Biryani"
                />
                <div>
                    <p className="text-lg font-semibold text-gray-800">{item?.food?.name}</p>
                    <p className="text-gray-600">₹{item?.totalPrice}</p>
                </div>
            </div>
            <div>
                <Button
                    variant="contained"
                    disabled
                    sx={{
                        backgroundColor: "#4caf50",
                        color: "white",
                        borderRadius: "20px",
                        padding: "6px 16px",
                        textTransform: "none",
                        cursor: "not-allowed",
                        "&:hover": {
                            backgroundColor: "#4caf50",
                        },
                    }}
                >
                    {item.orderStatus}
                </Button>
            </div>
        </Card>
    );
};