export const userNameValidator = (name) => {
    //name should be at least 3 characters long and contain only letters and spaces
    const nameRegex = /^[A-Za-z\s]{3,}$/;
    return nameRegex.test(name);
};

export const passwordValidator = (password) => {
    //password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
    const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};
