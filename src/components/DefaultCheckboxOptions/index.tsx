import React from 'react';

import './style.scss';

interface ICheckboxOptions {
  title: string;
  options: Array<{
    label: string;
    checked: boolean;
  }>;
  onChange: () => void;
}
/* eslint-disable */
const DefaultCheckboxOptions: React.FC<ICheckboxOptions> = ({ options, title, onChange }) => (
  <div id="checkbox_options">
    <label htmlFor="_">{title}</label>

    {options && options.length
      ? options.map((option) => (
          <div key={option.label}>
            <span>{option.label}</span>

            <input type="checkbox" checked={option.checked} onChange={onChange} />
          </div>
        ))
      : null}
  </div>
);

export default DefaultCheckboxOptions;
