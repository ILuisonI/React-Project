import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import validateLoginSchema from "../validation/loginValidation";
import { Alert } from "@mui/material/";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../routes/ROUTES";
import axios from "axios";
import { toast } from 'react-toastify';
import useLoggedIn from "../hooks/useLoggedIn";

import RestartAltIcon from '@mui/icons-material/RestartAlt';

const LoginPage = () => {
    const [inputState, setInputState] = useState({
        email: "",
        password: "",
    });

    const [resetInputState] = useState({
        email: "",
        password: "",
    });

    const [inputsErrorsState, setInputsErrorsState] = useState({});

    const navigate = useNavigate();

    const loggedIn = useLoggedIn();

    useEffect(() => {
        loggedIn();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleBtnClick = async (ev) => {
        ev.preventDefault();
        try {
            const joiResponse = validateLoginSchema(inputState);
            setInputsErrorsState(joiResponse);
            if (joiResponse) {
                return;
            }
            const { data } = await axios.post("/users/login", inputState);
            localStorage.setItem("token", data.token);
            loggedIn();
            toast.success('Login Successful');
            navigate(ROUTES.HOME);
        } catch (err) {
            toast.error('Username And/Or Password Are Incorrect!');
            console.log("Login Error", err.message);
        }
    };

    const handleInputChange = (ev) => {
        let newInputState = JSON.parse(JSON.stringify(inputState));
        newInputState[ev.target.id] = ev.target.value;
        setInputState(newInputState);
    };

    const cancelBtnClick = () => {
        navigate(ROUTES.HOME);
    };

    const resetAll = () => {
        setInputState(resetInputState);
        setInputsErrorsState(null);
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="div" noValidate sx={{ mt: 3 }}>
                    <form onSubmit={handleBtnClick}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleInputChange}
                                    value={inputState.email}
                                />
                                {
                                    inputsErrorsState && inputsErrorsState.email && (
                                        <Alert severity="warning">
                                            {inputsErrorsState.email.map(item =>
                                                <div key={"email-errors" + item}>{item}.</div>
                                            )}
                                        </Alert>
                                    )}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    onChange={handleInputChange}
                                    value={inputState.password}
                                />
                                {
                                    inputsErrorsState && inputsErrorsState.password && (
                                        <Alert severity="warning">
                                            {inputsErrorsState.password.map(item =>
                                                <div key={"password-errors" + item}>{item}.</div>
                                            )}
                                        </Alert>
                                    )}
                            </Grid>
                            <Grid item xs={6}>
                                <Button color="error" onClick={cancelBtnClick} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button color="warning" onClick={resetAll} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    <RestartAltIcon />
                                </Button>
                            </Grid>
                        </Grid>
                        <Button type="submit" onClick={handleBtnClick} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link style={{ textDecoration: `none`, color: "inherit" }} to={ROUTES.REGISTER}>
                                    <Typography variant="body2">
                                        Don't have an account? Sign Up
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};
export default LoginPage;