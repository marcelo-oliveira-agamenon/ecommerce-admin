import React from 'react';
import './style.scss';

interface IDefaultSelect
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  options: Array<{
    value: string | number;
    label: string | number;
  }>;
  label: string;
  errorText?: string;
}

const DefaultSelect: React.FC<IDefaultSelect> = ({ options, label, errorText, ...rest }) => (
  <div className="default_select">
    <label htmlFor={rest.id}>{label}</label>

    <select {...rest}>
      <option disabled selected={rest.value === undefined}>
        {rest.placeholder}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>

    {errorText && <span className="error_text">{errorText}</span>}
  </div>
);

export default DefaultSelect;
