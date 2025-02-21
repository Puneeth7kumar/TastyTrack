import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'
import Link from 'next/link';
import { categorizeIngredients } from '../util/categorizeIngredients';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../State/Cart/Action';

const MenuCard = ({ item }) => {
    const [selectedIngredients, setSelectedIngredients] = useState([])
    const dispatch = useDispatch();
    const handleCheckBoxChange = (itemName) => {
        console.log("value", itemName);
        if (selectedIngredients.includes(itemName)) {
            setSelectedIngredients(selectedIngredients.filter((item) => item !== itemName))
        } else {
            setSelectedIngredients([...selectedIngredients, itemName])
        }
    }
    const handleAddItemToCart = (e) => {
        e.preventDefault()
        const reqdata = {
            token: localStorage.getItem("jwt"),
            foodId: item.id,
            quantity: 1,
            ingredients: selectedIngredients.map(ingredient => ingredient.name)

        };
        dispatch(addItemToCart(reqdata))
        console.log("req data", reqdata)
    }

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
            >
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img src={item.images[0]} className='w-[7rem] h-[7rem] object-cover' />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className='font-semibold text-xl'>{item.name}</p>
                            <p>₹{item.price}</p>
                            <p className='text-gray-500'>{item.description}</p>
                        </div>
                    </div>
                </div>

            </AccordionSummary>
            <AccordionDetails>
                <form onSubmit={handleAddItemToCart}>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            Object.keys(categorizeIngredients(item.ingredients)).map((category) =>
                                <div>
                                    <p>{category}</p>
                                    <FormGroup>
                                        {categorizeIngredients(item.ingredients)[category].map((item) => (
                                            <FormControlLabel key={item.name} control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} label={item.name} />
                                        ))}

                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>

                    <div className='pt-5'>
                        <Button variant='contained' disable type="submit">
                            {true ? "Add to Cart" : "Out Of Stock"}
                        </Button>
                    </div>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard

