import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BackgroundContainer from '../../components/backgroundcontainer';
import QuizList from '../../components/quizzes/QuizList';
import TextFieldCategory from '../../components/TextFieldCategory';
import { getCategoryQuiz } from '../../asyncActions';
import { selectManipulateReducer } from '../../slices/manipulateSlice';

function Category() {
  const dispatch = useDispatch();
  const { category } = useSelector(selectManipulateReducer);

  useEffect(() => {
    dispatch(getCategoryQuiz(category));
  }, [category]);

  return (
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="visible"
    >
      {/* <ClipLoader
        css={`
          position: absolute;
          top: 46%;
          margin: auto;
        `}
        loading={quizzesFetchState === 'loading' && query === ''}
        color="#5255CA"
      /> */}
      <div className="Quizzes__container">
        <TextFieldCategory
          style={{
            marginTop: '3.2rem',
            borderRadius: '5px',
            backgroundColor: 'white',
          }}
          variant="filled"
        />
        {/* {shouldSearchAppear()} */}
        <QuizList type="category" />
      </div>
    </BackgroundContainer>
  );
}

export default Category;
