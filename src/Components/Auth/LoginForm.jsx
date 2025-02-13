import { Button, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../State/Authentication/Action'

const initialValue = {
    email: "",
    password: ""
}
const LoginForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const handleSubmit = (values) => {
        dispatch(loginUser({ userData: values, navigate: router.push }))
    }
    const handleRegister = () => {
        router.push("/?auth=register")
    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Login
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValue}>
                <Form>
                    <Field
                        as={TextField}
                        name="email"
                        label="Email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
                    <Field
                        as={TextField}
                        name="password"
                        label="Password"
                        fullWidth
                        variant="outlined"
                        type="password"
                        margin="normal"
                    />
                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type="submit" variant="contained">
                        Login
                    </Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                Don't have an account?
                <Button size='small' onClick={handleRegister}>
                    Register
                </Button>
            </Typography>
        </div>
    )
}

export default LoginForm