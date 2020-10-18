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
          className="Landing__icon"
          src={correct}
        />
      )}
      {userAnswer && userAnswer !== answer && (
        <img
          onAnimationEnd={() => setAnimationEnded(true)}
          className="Landing__icon"
          src={wrong}
        />
      )}
      {animationEnded && (
        <Donut size={140} strokeWidth={7} className="Landing__donut">
          <DonutValue>{answer}</DonutValue>
          <DonutLabel style={{ fontSize: '44px' }}>
            {userAnswer === answer ? 'Perfect' : 'Bad result'}
          </DonutLabel>
        </Donut>
        //   strokeWidth={7}
        //   className="Landing__donut"
        //   fontSize={44}
        //   value={userAnswer === answer ? 100 : 0}
        // />
      )}
    </>
  );
};

export default DemoResult;
