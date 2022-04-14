// Misc
import React from "react";
import { Helmet } from 'react-helmet';

// Components
import Navbar from "../Components/navbar";
import LoginForm from "../Components/loginForm";
import Footer from "../Components/footer";

function Login() {
    return (
        <div>
            <Helmet>
                <title>Login Page</title>
            </Helmet>

            <Navbar active={"login"} />
            <LoginForm />
            <Footer />
        </div>
    )
}

export default Login
