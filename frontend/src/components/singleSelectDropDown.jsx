import { useState } from "react";

const SingleSelectDropdown = ({
    placeholder = "Select...",
    options = [],
    onChange,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleSelect = (item) => {
        setSelected(item);
        setIsOpen(false); // Auto-close on selection

        // Notify parent
        if (onChange) {
            onChange(item);
        }
    };

    const clearSelection = (e) => {
        e.stopPropagation();
        setSelected(null);
        if (onChange) {
            onChange(null);
        }
    };

    return (
        <div className="relative w-full max-w-xs">
            {/* Trigger */}
            <button
                type="button"
                onClick={() => {
                    console.log("Button clicked! Current:", isOpen);
                    setIsOpen(!isOpen);
                }}
                className="btn btn-outline w-full justify-between h-10 border-gray-500 font-normal bg-base-100"
            >
                <span className={selected ? "" : "opacity-50"}>
                    {selected || placeholder}
                </span>

                {selected ? (
                    <button
                        type="button"
                        onClick={clearSelection}
                        className="ml-2 text-error hover:text-error-focus"
                    >
                        ✕
                    </button>
                ) : (
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                )}
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
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className={`w-full text-left p-3 hover:bg-base-200 transition-colors ${
                                        selected === option
                                            ? "bg-primary text-primary-content"
                                            : ""
                                    }`}
                                >
                                    {option}
                                </button>
                            ))
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export default SingleSelectDropdown;
