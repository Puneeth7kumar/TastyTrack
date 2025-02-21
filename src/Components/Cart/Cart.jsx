"use client";
import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { CartItem } from './CartItem'
import { AddressCart } from './AddressCart'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { AddLocation } from '@mui/icons-material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { findCart } from '../State/Cart/Action';

export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: "none",
    boxShadow: 24,
    p: 4,
};
const initialValues = {
    streetAddress: "",
    state: "",
    pincode: "",
    city: ""
}
// const validationSchema = Yup.object.shape({
//     streetAddress: Yup.string().required("Street address is required"),
//     state: Yup.string().required("State is required"),
//     pincode: Yup.required("Pincode is required"),
//     city: Yup.string().required("City is required")
// })
const items = [1, 1]
const Cart = () => {
    const createOrderUsingSelectedAddress = () => {

    }
    const dispatch = useDispatch()
    const handleOpenAddressModel = () => setOpen(true)
    const [open, setOpen] = React.useState(false);
    const { cart } = useSelector(store => store)
    const jwt = localStorage.getItem("jwt")
    useEffect(() => {
        if (jwt) {
            dispatch(findCart(jwt));
        }
    }, [dispatch, jwt]);
    const handleClose = () => setOpen(false);
    const handleSubmit = (value) => {
        console.log("Form value", value)
    }


    return (
        <>
            <main className='lg:flex justify-between '>
                <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10 bg-slate-400'>
                    <div className='bg-slate-200 py-5 ml-2 mr-2 rounded-md space-y-3'>
                        {cart.cart?.item.map((item) => (<CartItem item={item} />))}
                    </div>
                    <Divider />
                    <div className='billDetails px-5 text-sm bg-slate-200 rounded-md py-1 ml-2 mr-2'>
                        <p className='font-extralight py-5'>Bill Details</p>
                        <div className='space-y-3'>
                            <div className='flex justify-between text-gray-900'>
                                <p>Item Total</p>
                                <p>₹{cart.cart?.total}</p>
                            </div>
                            <div className='flex justify-between text-gray-900'>
                                <p>Deliver Fee</p>
                                <p>₹30</p>
                            </div>
                            <div className='flex justify-between text-gray-900'>
                                <p>GST and Restaurant Charges</p>
                                <p>₹21</p>
                            </div>
                            <div>
                                <Divider />
                            </div>
                            <div className='flex justify-between text-gray-900 py-2'>
                                <p>Total Pay</p>
                                <p>₹{cart.cart?.total + 33 + 21}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Divider orientation='vertical' flexItem />
                <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0 bg-gradient-to-r from-slate-400 via-slate-300 to-slate-500'>
                    <div>
                        <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivery Address</h1>
                        <div className='flex gap-5 flex-wrap justify-center'>
                            {[1, 1, 1].map((item) => (<AddressCart handleSelectAddress={createOrderUsingSelectedAddress} item={item} showButton={true} />))}
                            <Card
                                className="flex gap-5 w-64 p-5 bg-white rounded-3xl shadow-md hover:shadow-lg transition-all"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    backgroundColor: '#f9f9f9',
                                }}
                            >
                                <AddLocation />
                                <div className="space-y-3 text-gray-900">
                                    <h1 className="font-semibold text-lg text-black">Add New Address</h1>


                                    <Button
                                        variant="contained"
                                        fullWidth
                                        color="secondary"
                                        style={{ marginTop: '8px', textTransform: 'none' }}
                                        onClick={handleOpenAddressModel}
                                    >
                                        Add
                                    </Button>

                                </div>
                            </Card>
                        </div>
                    </div>

                </section>
            </main>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Formik initialValues={initialValues}
                        //validationSchema={validationSchema}
                        onSubmit={handleSubmit}>
                        <Form>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="streetAddress"
                                        label="Street Address"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="state"
                                        label="Satate"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="pincode"
                                        label="Pincode"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        name="city"
                                        label="City"
                                        fullWidth
                                        variant="outlined"
                                    // error={!ErrorMessage("streetAddress")}
                                    // helperText={
                                    //     <ErrorMessage>
                                    //         {(msg) => <span className='text-red-600'>{msg}</span>}
                                    //     </ErrorMessage>
                                    // }

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button fullWidth variant='contained' type='submit' color='primary'>Delivery Here</Button>
                                </Grid>
                            </Grid>
                        </Form>

                    </Formik>
                </Box>
            </Modal>
        </>
    )
}

export default Cart