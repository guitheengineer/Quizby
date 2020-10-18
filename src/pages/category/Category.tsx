import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'store';
import { selectManipulateReducer } from 'slices/manipulate-slice';
import { getCategoryQuiz } from 'slices/quizzes-slice/async-actions';
import BackgroundContainer from 'components/main/background-container';
import TextFieldCategory from 'components/common/textfields/TextFieldCategory';
import QuizList from '../quizzes/components/QuizList';

const Category = () => {
  const dispatch = useAppDispatch();
  const { category } = useAppSelector(selectManipulateReducer);

  useEffect(() => {
    dispatch(getCategoryQuiz(category));
  }, [category]);

  return (
    <BackgroundContainer
      justifyContent="normal"
      alignItems="center"
      overflow="visible"
    >
      <div className="Quizzes__container">
        <TextFieldCategory className="Category__textfield" variant="filled" />
        <QuizList type="category" />
      </div>
    </BackgroundContainer>
  );
};

export default Category;
