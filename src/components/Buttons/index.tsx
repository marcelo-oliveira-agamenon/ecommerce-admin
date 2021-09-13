import React from 'react';

import './style.scss';

interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeButton: 'primary' | 'secondary';
}

const DefaultButton: React.FC<IButton> = ({ typeButton, ...rest }) => (
  <button className={`default-button ${typeButton}`} {...rest} type="button" />
);

export default DefaultButton;
