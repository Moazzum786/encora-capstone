import { useProductFilter } from "../provider/ProductFilterProvider";
import SingleSelectDropdown from "./singleSelectDropDown";

const SortSelectComponent = () => {
    const { setSort } = useProductFilter();
    const sortOptions = [
        { label: "Price: Low to High", value: "price,asc" },
        { label: "Price: High to Low", value: "price,desc" },
        { label: "Newest First", value: "createdAt,desc" },
        { label: "Oldest First", value: "createdAt,asc" },
        { label: "Name: A-Z", value: "name,asc" },
        { label: "Name: Z-A", value: "name,desc" },
    ];

    const handleSortChange = (selectedLabel) => {
        if (!selectedLabel) {
            setSort(null);
            return;
        }

        const option = sortOptions.find((opt) => opt.label === selectedLabel);
        if (option && setSort) {
            setSort(option.value);
        }
    };

    return (
        <SingleSelectDropdown
            placeholder="Sort by..."
            options={sortOptions.map((opt) => opt.label)}
            onChange={handleSortChange}
        />
    );
};

export default SortSelectComponent;
