import { useProductFilter } from "../provider/ProductFilterProvider";
import SingleSelectDropdown from "./singleSelectDropDown";

function GenderSelectComponent() {
    const { setGender } = useProductFilter();
    const options = ["MEN", "WOMEN", "UNISEX"];
    return (
        <>
            <SingleSelectDropdown
                placeholder="gender"
                onChange={setGender}
                options={options}
            />
        </>
    );
}

export default GenderSelectComponent;
