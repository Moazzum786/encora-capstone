import InputFieldSetWithValidation from "./inputFieldSetWithValidation";
import { passwordValidator, userNameValidator } from "../utils/validators";
import { Link } from "react-router";

function RegisterForm() {
    const confirmPasswordValidator = (value) => {
        const password = document.querySelector(
            "input[id=password-input]",
        ).value;
        return value === password;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log("register form submitted with +", formData);
    };

    return (
        <div className="registration-form-container col-span-1 col-start-2 place-self-center w-[50%] p-6 rounded-lg">
            <form
                className="registration-form flex flex-col gap-3"
                onSubmit={handleSubmit}
            >
                <h1 className="text-3xl">Register</h1>
                <InputFieldSetWithValidation
                    label="Username"
                    placeholder="Enter your username"
                    required={true}
                    type="text"
                    validationFunction={userNameValidator}
                    validationHint="name should be at least 3 characters long and contain only letters and spaces"
                />
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
                <InputFieldSetWithValidation
                    label="Confirm Password"
                    placeholder="Re-enter your password"
                    required={true}
                    type="password"
                    validationFunction={confirmPasswordValidator}
                    validationHint="The password should match the one entered above"
                />
                <Link to={"/auth/login"}>
                    <button className="btn btn-link">
                        have an account? login here.
                    </button>
                </Link>
                <button type="submit" className="submit-button btn btn-primary">
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;
