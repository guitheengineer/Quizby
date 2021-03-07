import { useAppSelector } from 'store';
import { selectDemoReducer } from 'slices/demo-slice';
import { Donut, DonutValue, DonutLabel } from 'react-donut-component';

const DemoResult = () => {
  const { userAnswer, answer } = useAppSelector(selectDemoReducer);
  return (
    <>
      {userAnswer && (
        <span className="Quiz-demo__wrapper">
          <Donut
            indicatorColor="#5255ca"
            trackColor="white"
            size={160}
            animate
            linecap="round"
            color={'#5255CA'}
            strokeWidth={8}
            className="Quiz-demo__donut"
          >
            <DonutValue
              styleContainer={{ left: 3 }}
              className="Quiz-demo__value"
            >
              {userAnswer === answer ? 100 : 0}
            </DonutValue>
            <DonutLabel style={{ whiteSpace: 'nowrap' }}>
              {userAnswer === answer ? 'Perfect score!' : 'Incorrect :('}
            </DonutLabel>
          </Donut>
        </span>
      )}
    </>
  );
};

export default DemoResult;
