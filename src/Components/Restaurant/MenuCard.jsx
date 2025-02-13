import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import Link from 'next/link';
const ingredients = [
    {
        category: "Nuts & seeds",
        ingredients: ["Cashews"]
    },
    {
        category: "Protein",
        ingredients: ["Protien", "Bacon strips"]
    }
]
const MenuCard = () => {
    const handleCheckBoxChange = (value) => {
        console.log("value");
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
                        <img src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400" className='w-[7rem] h-[7rem] object-cover' />
                        <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                            <p className='font-semibold text-xl'>Burger</p>
                            <p>₹499</p>
                            <p className='text-gray-500'>Most delicious and spicy burger</p>
                        </div>
                    </div>
                </div>
                <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            ingredients.map((item) =>
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {item.ingredients.map((item) => <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(item)} />} label={item} />)}
                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>
                    <Link href="/cart">
                        <div className='pt-5'>
                            <Button variant='contained' disable type="submit">
                                {true ? "Add to Cart" : "Out Of Stock"}
                            </Button>
                        </div></Link>
                </form>
            </AccordionDetails>
        </Accordion>
    )
}

export default MenuCard

