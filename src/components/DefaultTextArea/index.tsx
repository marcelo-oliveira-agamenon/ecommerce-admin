import React from 'react';
import './style.scss';

interface IDefaultTextArea
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  errorText?: string;
}

const DefaultTextArea: React.FC<IDefaultTextArea> = ({ label, errorText, ...rest }) => (
  <div className="default_input_text_area">
    <label htmlFor={rest.id}>{label}</label>

    <textarea {...rest} />

    {errorText && <span className="error_text">{errorText}</span>}
  </div>
);

export default DefaultTextArea;
