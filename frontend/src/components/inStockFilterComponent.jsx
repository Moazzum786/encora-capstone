const InStockFilter = ({ onChange }) => {
    const handleChange = (e) => {
        const isChecked = e.target.checked;
        if (onChange) {
            onChange(isChecked);
        }
    };

    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input
                type="checkbox"
                className="checkbox checkbox-primary"
                onChange={handleChange}
            />
            <span className="label-text">In Stock Only</span>
        </label>
    );
};

export default InStockFilter;
