import { useUniversities } from "../hooks/useUniversitiesQuery.ts";
import { useState } from "react";
import ComboBox from "../components/inputs/ComboBox/ComboBox.tsx";
const ComboBoxPage = () => {
    const [filterBy, setFilterBy] = useState('')
    const { data: universitiesData, isLoading } = useUniversities(filterBy)
    const universities = universitiesData?.map((university) => university.name) || []
    return (
        <div>
            <h1>ComboBoxPage</h1>
            <ComboBox
                label={'Univerzita na kterou chodíte'}
                loading={isLoading}
                value={filterBy}
                onChange={setFilterBy}
                options={universities}
                width={300}
            />
        </div>
    )
}

export default ComboBoxPage;
