import React from 'react';
import ComboBoxListItem from "./ComboBoxListItem.tsx";
interface IComboBoxList {
    options: string[];
    onSelect: (value: string) => void;
    style?: React.CSSProperties;
    loading?: boolean;
    inputRef?: React.Ref<HTMLInputElement>;
}

const ComboBoxList: React.FC<IComboBoxList> = ({ options, onSelect, style, loading, inputRef }) => {
    const uniqueOptions = Array.from(new Set(options));
    return (
         <div className="combo-box-list" ref={inputRef} style={style}>
             {loading && <div>Loading...</div>}
             { uniqueOptions.length === 0 && <div>No options</div>}
             { uniqueOptions && (
                 uniqueOptions.map((option) => (
                     <ComboBoxListItem
                         key={option} item={option}
                         onClick={() => onSelect(option)}
                     />
                ))
            )}
         </div>
    );
};

export default ComboBoxList;
