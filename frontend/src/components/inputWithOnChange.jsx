const Input = ({ type, placeholder = "Enter value", onChange, value = "" }) => {
    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
            className="input input-bordered w-full max-w-xs"
        />
    );
};

export default Input;
