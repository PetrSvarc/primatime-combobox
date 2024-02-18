import React from 'react';
import { Controller, Control, RegisterOptions } from 'react-hook-form';
import TextInput, { ITextInputProps } from "./TextInput.tsx";


interface TextInputWithHookFormProps extends ITextInputProps {
    name: string;
    control: Control;
    rules?: RegisterOptions;
}

const TextInputWithHookForm: React.FC<TextInputWithHookFormProps> = ({ value, name, control, label, clearable, rules, ...props }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <TextInput
                    label={label}
                    value={value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                    clearable={clearable}
                    {...props}
                />
            )}
        />
    )
}

export default TextInputWithHookForm;


