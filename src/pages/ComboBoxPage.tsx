import StudentDetailsForm from "../components/forms/StudentDetailsForm.tsx";
import { useState } from "react";
const ComboBoxPage = () => {
    const [topPosition, setTopPosition] = useState(true)
    return (
        <div className="combo-box-page">
            <h1>ComboBoxPage</h1>
            <button onClick={() => setTopPosition(!topPosition)}>Change Form Position</button>
            <div  style={{ marginTop: topPosition ? 0 : 'auto' }}>
                <StudentDetailsForm/>
            </div>
        </div>
    )
}

export default ComboBoxPage;
