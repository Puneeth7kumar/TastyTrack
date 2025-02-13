import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react'
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';
const initialValue = {
    name: "",
    email: "",
    password: "",
    role: ""
}
const RegisterForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const handleSubmit = (values) => {

        dispatch(registerUser({ userData: values, navigate:router.push }))
    }
    const handleLogin = () => {
        router.push("/?auth=login")
    }
    return (
        <div>
            <Typography variant='h5' className='text-center'>
                Register
            </Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValue}>
                <Form>
                    <Field
                        as={TextField}
                        name="fullName"
                        label="FullName"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                    />
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
                    <FormControl fullWidth margin="normal">
                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                        <Field
                            as={Select}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="role"
                            label="Role"

                        >
                            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>

                        </Field>
                    </FormControl>
                    <Button sx={{ mt: 2, padding: "1rem" }} fullWidth type="submit" variant="contained">
                        Register
                    </Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 3 }}>
                if have an account already?
                <Button size='small' onClick={handleLogin}>
                    Login
                </Button>
            </Typography>
        </div>
    )
}

export default RegisterForm