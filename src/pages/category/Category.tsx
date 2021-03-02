import React, { useEffect } from 'react';
import './category.scss';
import { useAppDispatch } from '../../store';
import { getCategoryQuiz } from '../../slices/quizzes-slice/async-actions';
import BackgroundContainer from '../../components/main/background-container';
import TextFieldCategory from '../../components/common/textfields/TextFieldCategory';
import QuizList from '../quizzes/components/QuizList';
import { useParams } from 'react-router-dom';

const Category = () => {
  const dispatch = useAppDispatch();

  const { quizCategory } = useParams<{ quizCategory: string }>();

  useEffect(() => {
    dispatch(getCategoryQuiz(quizCategory));
  }, [quizCategory, dispatch]);

  return (
    <BackgroundContainer
      className="Category__background-container"
      justifyContent="normal"
      alignItems="center"
      overflow="visible"
    >
      <div className="Quizzes">
        <TextFieldCategory className="Category__textfield" variant="filled" />
        <QuizList type="category" />
      </div>
    </BackgroundContainer>
  );
};

export default Category;
