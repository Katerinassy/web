
import React from "react";
import Header from "./pages/header";
import LoginForm from "./pages/login";
import Footer from "./pages/footer";
import './App3.css';
import Question from "./pages/questions";

const LoginUser = () => {
    return (
        <main>
            <Header />
            <div>
                <LoginForm />
            </div>
            <Question />
            <Footer/>
        </main>

    );
}

export default LoginUser;
