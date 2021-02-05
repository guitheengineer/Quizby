import React from 'react';

type Props = {
  label: number;
  description: string;
  icon: any;
};
const Number = ({ icon: Icon, label, description }: Props) => (
  <li className="User__numbers">
    <Icon color="#5a5a72" size={19} />
    <div className="User__label">{label}</div>
    <p className="User__description">{description}</p>
  </li>
);

export default Number;
