import * as React from 'react';
import { FunctionComponent, useEffect, useRef, useState } from 'react';

import './HideableStateDisplay.scss';

export interface IMyComponentProps {
  counter: number;
  onClick?: () => void;
}

export const HideableStateDisplay: FunctionComponent<IMyComponentProps> = (props: IMyComponentProps) => {

  const timerHandle = useRef<number | null>(null);
  const [stateCounter, setStateCounter] = useState(42);

  useEffect(() => {
    timerHandle.current = +setInterval(() => {
      setStateCounter(stateCounter + 1);
    }, 2500);

    return () => {
      if (timerHandle.current) {
        clearInterval(timerHandle.current);
        timerHandle.current = null;
      }
    };
  });

  const {counter: propsCounter, onClick} = props;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return <div className={`hidable-state-display`}>
    <div className={'comp-props'}>From angular state: {propsCounter}
      <span onClick={handleClick}
            className={'increase-button'}>click to increase</span>
    </div>
    <div className={'comp-state'}>From react state1: {stateCounter}</div>
  </div>;
};
