import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

import './style.scss';

interface IDefaultInput
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  errorText?: string;
}

const DefaultInput: React.FC<IDefaultInput> = ({ label, errorText, ...rest }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [typeInput, setTypeInput] = useState<string>(rest.type || 'text');

  const handleShowPassword = () => {
    setShowPassword((value) => !value);
    if (!showPassword) {
      setTypeInput('text');
    } else {
      setTypeInput('password');
    }
  };

  return (
    <div className="input-default">
      {rest.type === 'password' && (
        <>
          {showPassword ? (
            <AiOutlineEye size={20} onClick={handleShowPassword} />
          ) : (
            <AiOutlineEyeInvisible size={20} onClick={handleShowPassword} />
          )}
        </>
      )}

      <label htmlFor={rest.id}>{label}</label>

      <input {...rest} type={typeInput} />

      {errorText && <span className="error-text">{errorText}</span>}
    </div>
  );
};

export default DefaultInput;
