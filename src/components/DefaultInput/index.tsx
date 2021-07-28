import React from 'react';

import './style.scss';

interface IDefaultInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
}

const DefaultInput: React.FC<IDefaultInput> = ({ label, ...rest }) => (
  <div className="input-default">
    <label htmlFor={rest.id}>{label}</label>

    <input {...rest} />
  </div>
);

export default DefaultInput;
