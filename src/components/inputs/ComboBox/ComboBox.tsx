import React, { useState } from "react";
import { flushSync } from 'react-dom';
import TextInput, { ITextInputProps } from "../TextInput/TextInput.tsx";
import ComboBoxList from "./ComboBoxList.tsx";
import {
    useFloating,
    flip,
    offset,
    useClick,
    useDismiss,
    useRole,
    useInteractions,
    size,
    autoUpdate,
} from '@floating-ui/react';


export interface IComboBoxProps extends ITextInputProps {
    options: string[];
    loading?: boolean;
}

const ComboBox: React.FC<IComboBoxProps> = ({ label, value, onChange , options, width, loading, error, disabled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [maxHeight, setMaxHeight] = useState<number | string>('auto');

    const { refs, floatingStyles, context} = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            flip(),
            offset(5 ),
            size({
                apply({availableHeight}) {
                    flushSync(() => setMaxHeight(availableHeight - 40));
                },
            }),
        ]
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);
    const role = useRole(context);

    const {getReferenceProps, getFloatingProps} = useInteractions([
        click,
        dismiss,
        role,
    ]);

    const handleSelect = (value: string) => {
        if(onChange) {
            setIsOpen(false);
            onChange(value);
        }
    };
    const style = {
        width: width || 'auto'
    }
    return (
        <div className="combo-box" style={style}>
            <TextInput
                clearable
                label={label}
                value={value}
                error={error}
                disabled={disabled}
                onChange={onChange}
                inputRef={refs.setReference}
                {...getReferenceProps()}
            />
            {isOpen &&
                    <ComboBoxList
                        options={options}
                        onSelect={(value) => handleSelect(value)}
                        inputRef={refs.setFloating}
                        style={{...floatingStyles, maxHeight }} {...getFloatingProps()}
                        loading={loading}
                    />
            }
        </div>
    );
};

export default ComboBox;

