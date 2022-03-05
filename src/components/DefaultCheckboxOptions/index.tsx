import React from 'react';

import './style.scss';

interface ICheckboxOptions {
  type: string;
  title: string;
  options: Array<{
    label: string;
    checked: boolean;
  }>;
  onChange: () => void;
}
/* eslint-disable */
const DefaultCheckboxOptions: React.FC<ICheckboxOptions> = ({ options, title, type, onChange }) => (
  <div id="checkbox_options">
    <label htmlFor="_">{title}</label>

    <div className="options_container">
      {options && options.length
        ? options.map((option) => (
            <div
              className={`options_container_option ${option.checked ? 'checked' : ''}`}
              key={option.label}
            >
              <label htmlFor={type + option.label}>{option.label}</label>

              <input
                id={type + option.label}
                type="checkbox"
                checked={option.checked}
                onChange={onChange}
              />
            </div>
          ))
        : null}
    </div>
  </div>
);

export default DefaultCheckboxOptions;
