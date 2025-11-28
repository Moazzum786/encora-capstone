import { useState } from "react";

const MultiSelectDropdown = ({
    placeholder = "Select...",
    options = [],
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState([]);

    const toggle = (item) => {
        let newSelected;
        if (selected.includes(item)) {
            newSelected = selected.filter((i) => i !== item);
        } else {
            newSelected = [...selected, item];
        }
        setSelected(newSelected);

        if (onChange) {
            onChange(newSelected);
        }
    };

    return (
        <div className="relative w-full max-w-xs">
            <button
                type="button"
                onClick={() => {
                    console.log("Button clicked! Current:", isOpen);
                    setIsOpen(!isOpen);
                }}
                className="btn btn-outline border-gray-500 w-full justify-start h-auto min-h-10 flex-wrap gap-2 font-normal bg-base-100 "
            >
                <span className="opacity-50">{placeholder}</span>
            </button>

            {/* Dropdown List */}
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Options */}
                    <div className="absolute z-20 w-full mt-2 bg-base-100 border border-base-300 rounded-lg shadow-xl max-h-60 overflow-auto">
                        {options.length === 0 ? (
                            <div className="p-4 text-center text-gray-500">
                                No options
                            </div>
                        ) : (
                            options.map((option) => (
                                <label
                                    key={option}
                                    className="flex items-center gap-3 p-3 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        className="checkbox checkbox-sm"
                                        checked={selected.includes(option)}
                                        onChange={() => toggle(option)}
                                    />
                                    <span>{option}</span>
                                </label>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
