"use client";
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Button, Card } from '@mui/material';

export const AddressCart = ({ item, showButton, handleSelectAddress }) => {
    return (
        <Card
            className="flex gap-5 w-64 p-5 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all"
            style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
            }}
        >
            <HomeIcon style={{ fontSize: '32px', color: '#4b5563' }} />
            <div className="space-y-3 text-gray-900">
                <h1 className="font-semibold text-lg text-black">Home</h1>
                <p className="text-sm text-gray-700">Jakribettu, Bantwal, DK, 574211</p>
                {showButton && (
                    <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        style={{ marginTop: '8px', textTransform: 'none' }}
                        onClick={() => handleSelectAddress(item)}
                    >
                        Select
                    </Button>
                )}
            </div>
        </Card>
    );
};
