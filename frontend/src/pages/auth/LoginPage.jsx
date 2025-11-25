import React from "react";
import LoginForm from "../../components/loginForm";

function LoginPage() {
    return (
        <div className="login-page flex-1 grid grid-cols-2">
            <LoginForm />
        </div>
    );
}

export default LoginPage;
