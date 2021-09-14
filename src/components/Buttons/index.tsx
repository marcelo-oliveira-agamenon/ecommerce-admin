import React from 'react';

import './style.scss';

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeButton: 'primary' | 'secondary';
  loading?: boolean;
}

const DefaultButton: React.FC<IButton> = ({ typeButton, loading, ...rest }) => (
  <button className={`default-button ${typeButton}`} {...rest} type="button">
    {loading ? <div className="loading" /> : rest.children}
  </button>
);

export default DefaultButton;
