import ComboBoxWithController from "../inputs/ComboBox/ComboBoxWithController.tsx";
import TextInputWithController from "../inputs/TextInput/TextInputWithController.tsx";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { useState, useEffect } from "react";
import { useUniversities } from "../../hooks/useUniversitiesQuery.ts";

const StudentDetailsForm = () => {
    const { control, handleSubmit, watch } = useForm();
    const [filterBy, setFilterBy] = useState('')
    const { data: universitiesData, isLoading } = useUniversities(filterBy)
    const universities = universitiesData?.map((university) => university.name) || []

    const watchUniversity = watch('university')
    useEffect(() => {
        setFilterBy(watchUniversity || '')
    }, [watchUniversity])

    const onSubmit: SubmitHandler<FieldValues> = (data:FieldValues) => {
        alert(`Jméno: ${data.firstName}\nUniverzita: ${data.university || 'nevyplněno'}`)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextInputWithController
                name={'firstName'}
                control={control}
                label={'Vaše jméno'}
                width={300}
                rules={{required: 'Toto pole je povinné'}}
            />
            <ComboBoxWithController
                name={'university'}
                control={control}
                label={'Univerzita na kterou chodíte'}
                loading={isLoading}
                options={universities}
                width={300}
            />
            <button type="submit" style={{ marginTop: 20}}>Submit</button>
        </form>
    )
}

export default StudentDetailsForm;