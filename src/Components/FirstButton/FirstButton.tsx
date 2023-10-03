import React, { FC } from 'react';
import './style.css'

type Props = {
  setFlag: (flag: boolean) => void;
};

export const FirstButton: FC<Props> = ({ setFlag }) => {
  return (
    <div className="FirstButtonContainer">
      <button className="FirstButton" onClick={() => setFlag(true)}>Просто нажми</button>
    </div>
  );
};
