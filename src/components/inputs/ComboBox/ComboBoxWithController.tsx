import React from 'react';
import { Controller, Control, FieldValues, RegisterOptions } from 'react-hook-form';
import ComboBox, { IComboBoxProps } from './ComboBox.tsx';

interface IComboBoxWithControllerProps<T extends FieldValues = FieldValues> extends Omit<IComboBoxProps, 'value' | 'onChange'> {
  name: string;
  control: Control<T>;
  rules?: RegisterOptions;
}

const ComboBoxWithController: React.FC<IComboBoxWithControllerProps> = ({ name, control, label, rules, width, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <ComboBox
          label={label}
          value={field.value || ''}
          onChange={field.onChange}
          error={fieldState.error?.message}
          {...props}
          width={width}
        />
      )}
    />
  );
};

export default ComboBoxWithController;

