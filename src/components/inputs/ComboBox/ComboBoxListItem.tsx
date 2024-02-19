import React from 'react';
interface ComboBoxListItemProps {
    item: string;
    onClick: (value: string) => void;
}
const comboBoxListItem: React.FC<ComboBoxListItemProps>  = ({ item, onClick }) => {
    return (
        <div className="combo-box-list-item" onClick={() => onClick(item)}>
            {item}
        </div>
    )
}

export default comboBoxListItem;
