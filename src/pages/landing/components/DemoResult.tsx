import React, { useState } from 'react';
import { useAppSelector } from 'store';
import { selectDemoReducer } from 'slices/demo-slice';
import correct from 'assets/icons/correct.svg';
import wrong from 'assets/icons/wrong.svg';
import { Donut, DonutValue, DonutLabel } from 'react-donut-component';

const DemoResult = () => {
  const [animationEnded, setAnimationEnded] = useState(false);
  const { userAnswer, answer } = useAppSelector(selectDemoReducer);
  return (
    <>
      {userAnswer === answer && (
        <img
          onAnimationEnd={() => setAnimationEnded(true)}
          className="Quiz-demo__icon"
          src={correct}
        />
      )}
      {userAnswer && userAnswer !== answer && (
        <img
          onAnimationEnd={() => setAnimationEnded(true)}
          className="Quiz-demo__icon"
          src={wrong}
        />
      )}
      {animationEnded && (
        <Donut
          indicatorColor="#5255ca"
          trackColor="white"
          size={160}
          linecap="round"
          color={'#5255CA'}
          strokeWidth={8}
          className="Quiz-demo__donut"
        >
          <DonutValue styleContainer={{ left: 3 }} className="Quiz-demo__value">
            {userAnswer === answer ? 100 : 0}
          </DonutValue>
          <DonutLabel style={{ whiteSpace: 'nowrap' }}>
            {userAnswer === answer ? 'Perfect score!' : 'Incorrect'}
          </DonutLabel>
        </Donut>
      )}
    </>
  );
};

export default DemoResult;
