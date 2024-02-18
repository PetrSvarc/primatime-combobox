import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';


export interface ITextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: string;
    clearable?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    onChange?: (value: string) => void;
    inputRef?: React.Ref<HTMLInputElement>;
}

const TextInput: React.FC<ITextInputProps> = ({value, onChange, label, error, clearable, inputRef, ...props }) => {
    const computedInputClassName = () => {
        let className = 'text-input__input'
        if (error) {
            className += ' text-input__input--error'
        }
        return className
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    const handleClear = () => {
        if (onChange) {
            onChange('');
        }
    }
    return (
        <div className={'text-input'}>
            <label className={'text-input__label'}>{label}</label>
            <div className={computedInputClassName()}>
                <input value={value} onChange={handleChange} {...props} ref={inputRef}/>
                {clearable && value && <CancelIcon className={'text-input__clear-button'} onClick={handleClear}/>}
            </div>
            {error && <div className={'text-input__error'}>{error}</div>}
        </div>
    )
}

export default TextInput;

