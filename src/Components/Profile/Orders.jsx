import React from 'react';
import { OrderCard } from './OrderCard';

const Orders = () => {
    return (
        <div
            style={{
                background: "linear-gradient(135deg, #1a1a1a 0%, #2c3e50 100%)",
                minHeight: "100vh",
                padding: "2rem",
                animation: "fadeIn 1s ease-in-out",
            }}
        >
            <style>
                {`
                    @keyframes fadeIn {
                        from {
                            opacity: 0;
                        }
                        to {
                            opacity: 1;
                        }
                    }
                    @keyframes slideIn {
                        from {
                            transform: translateY(20px);
                            opacity: 0;
                        }
                        to {
                            transform: translateY(0);
                            opacity: 1;
                        }
                    }
                `}
            </style>
            <div className="flex items-center flex-col">
                <h1
                    className="text-3xl text-center py-7 font-bold text-white"
                    style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                    My Orders
                </h1>
                <div className="space-y-5 w-full lg:w-1/2">
                    {[1, 1, 1].map((item, index) => (
                        <div
                            key={index}
                            style={{
                                background: "rgba(0, 0, 0, 0.3)",
                                backdropFilter: "blur(10px)",
                                borderRadius: "15px",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                cursor: "pointer",
                                animation: "slideIn 0.5s ease-in-out",
                                animationDelay: `${index * 0.2}s`,
                                animationFillMode: "both",
                            }}
                            className="hover:transform hover:scale-105 hover:shadow-lg"
                        >
                            <OrderCard />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Orders;