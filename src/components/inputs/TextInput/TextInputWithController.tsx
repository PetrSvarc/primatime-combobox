import React from 'react';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';
import TextInput, { ITextInputProps } from "./TextInput.tsx";


interface ITextInputWithControllerProps<T extends FieldValues = FieldValues> extends ITextInputProps {
    name: string;
    control: Control<T>;
    rules?: RegisterOptions;

}

const TextInputWithController: React.FC<ITextInputWithControllerProps> = ({ name, control, rules, width, ...props }) => {
    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <TextInput
                    value={field.value || ''}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                    {...props}
                    width={width}
                />
            )}
        />
    )
}

export default TextInputWithController;


