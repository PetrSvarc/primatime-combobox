import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';


export interface ITextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    error?: string;
    clearable?: boolean;
    ref?: React.Ref<HTMLInputElement>;
    onChange?: (value: string) => void;
    inputRef?: React.Ref<HTMLInputElement>;
    width?: string | number;
}

const TextInput: React.FC<ITextInputProps> = ({value, onChange, label, error, clearable, inputRef, width, ...props }) => {
    const computedInputClassName = () => {
        let className = 'text-input__input'
        if (error) {
            className += ' text-input__input--error'
        }
        return className
    }
    const style = {
        width: width || 'auto'
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
        <div className="text-input" style={style}>
            <label className="text-input__label">{label}</label>
            <div className={computedInputClassName()}>
                <input value={value} onChange={handleChange} {...props} ref={inputRef}/>
                {clearable && value && <CancelIcon className="text-input__clear-button" onClick={handleClear}/>}
            </div>
            <div className="text-input__error" style={{visibility: error ? 'visible' : 'hidden'}}>{error}</div>
        </div>
    )
}

export default TextInput;

