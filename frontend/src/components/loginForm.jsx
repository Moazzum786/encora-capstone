import InputFieldSetWithValidation from "./inputFieldSetWithValidation";
import { passwordValidator } from "../utils/validators";
import { Link } from "react-router";

function LoginForm() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log("login form submitted with +", formData);
    };

    return (
        <div className="registration-form-container col-span-1 col-start-2 place-self-center w-[50%] p-6 rounded-lg">
            <form
                className="registration-form flex flex-col gap-3"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl">Login</h1>
                <InputFieldSetWithValidation
                    label="Email"
                    placeholder="Enter your email"
                    required={true}
                    type="email"
                    validationHint="Please enter a valid email address"
                />
                <InputFieldSetWithValidation
                    label="Password"
                    placeholder="Enter your password"
                    required={true}
                    type="password"
                    validationFunction={passwordValidator}
                    validationHint="password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
                />

                <Link to={"/auth/login"}>
                    <button className="btn btn-link">
                        have no account? Register here.
                    </button>
                </Link>
                <button type="submit" className="submit-button btn btn-primary">
                    Login
                </button>
            </form>
        </div>
    );
}
export default LoginForm;
