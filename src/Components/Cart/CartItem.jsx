
// import { Chip, IconButton } from '@mui/material'
// import React from 'react'
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import { useRouter } from 'next/navigation';
// import { useDispatch, useSelector } from 'react-redux';
// import { removeCartItem, updateCartItem } from '../State/Cart/Action';
// export const CartItem = ({ item }) => {
//     const router = useRouter();
//     const { auth, cart } = useSelector(store => store);
//     const dispatch = useDispatch();
//     const jwt = localStorage.getItem("jwt")
//     const handleUpdateCartItem = (value, e) => {

//         if (value === -1 && item.quantity === 1) {
//             handleRemoveCartItem()
//             return;
//         }
//         const data = { cartItemId: item.id, quantity: item.quantity + value }
//         dispatch(updateCartItem({ data, jwt: auth.jwt || jwt }))
//         console.log("quantity", data)
//     }
//     const handleRemoveCartItem = () => {
//         dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }))
//     }
//     return (
//         <div className='px-5'>
//             <div className='lg:flex items-center lg:space-x-5'>
//                 <div>
//                     <img className='w-[rem] h-[5rem] object-cover' src={item.food.images[0]} alt="" />
//                 </div>
//                 <div className='flex items-center justify-between lg:w-[70%]'>
//                     <div className='space-y-1 lg:space-y-3 w-full'>
//                         <p>{item.food.name}</p>
//                         <div className='flex justify-between items-center'>
//                             <div className='flex items-center space-x-1'>
//                                 <IconButton onClick={() => handleUpdateCartItem(-1)}>
//                                     <RemoveCircleOutlineIcon />
//                                 </IconButton>
//                                 <div className='w-5 h-5 text-xs flex items-center justify-center'>
//                                     {item.quantity}
//                                 </div>
//                                 <IconButton onClick={() => handleUpdateCartItem(1)}>
//                                     <AddCircleOutlineIcon />
//                                 </IconButton>
//                             </div>
//                         </div>
//                     </div>
//                     <p>₹{item.totalPrice}</p>
//                 </div>
//             </div>
//             <div className='pt-3 space-x-2 '>
//                 {item.ingredients.map((ingredient) => <Chip label={ingredient} />)}
//             </div>
//         </div>
//     )
// }
import { Chip, IconButton } from '@mui/material'
import React, { useState, useEffect } from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../State/Cart/Action';

export const CartItem = ({ item }) => {
    const dispatch = useDispatch();
    const { auth } = useSelector(store => store);
    const jwt = localStorage.getItem("jwt");
    const [isRemoved, setIsRemoved] = useState(false);
  
    const [quantity, setQuantity] = useState(item.quantity);
    const [totalPrice, setTotalPrice] = useState(item.totalPrice);

  
    useEffect(() => {
        setTotalPrice(item.food.price * quantity);
    }, [quantity]);

    const handleUpdateCartItem = (value) => {

        if (value === -1 && quantity === 1) {
            handleRemoveCartItem();
            return;
        }

        const newQuantity = quantity + value;
        setQuantity(newQuantity); 
        setTotalPrice(item.food.price * newQuantity); 

        const data = { cartItemId: item.id, quantity: newQuantity };
        dispatch(updateCartItem({ data, jwt: auth.jwt || jwt }));
    };

    const handleRemoveCartItem = () => {
        setIsRemoved(true);
        dispatch(removeCartItem({ cartItemId: item.id, jwt: auth.jwt || jwt }));
        //dispatch({ type: "UPDATE_CART_TOTAL", payload: { cartItemId: item.id, newQuantity } });

    };
    if (isRemoved) return null;
    return (
        <div className='px-5'>
            <div className='lg:flex items-center lg:space-x-5'>
                <div>
                    <img className='w-[5rem] h-[5rem] object-cover' src={item.food.images[0]} alt="" />
                </div>
                <div className='flex items-center justify-between lg:w-[70%]'>
                    <div className='space-y-1 lg:space-y-3 w-full'>
                        <p>{item.food.name}</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex items-center space-x-1'>
                                <IconButton onClick={() => handleUpdateCartItem(-1)}>
                                    <RemoveCircleOutlineIcon />
                                </IconButton>
                                <div className='w-5 h-5 text-xs flex items-center justify-center'>
                                    {quantity}
                                </div>
                                <IconButton onClick={() => handleUpdateCartItem(1)}>
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p>₹{totalPrice}</p>
                </div>
            </div>
            <div className='pt-3 space-x-2'>
                {item.ingredients.map((ingredient, index) => (
                    <Chip key={index} label={ingredient} />
                ))}
            </div>
        </div>
    );
};
