import { useEffect } from 'react';
import './category.scss';
import { useAppDispatch, useAppSelector } from 'store';
import { getCategoryQuiz } from 'slices/quizzes-slice';
import BackgroundContainer from 'components/main/background-container';
import TextFieldCategory from 'components/common/textfields/TextFieldCategory';
import QuizList from '../quizzes/components/QuizList';
import { useParams } from 'react-router-dom';
import LoaderSpinner from 'components/common/loader-spinner';

const Category = () => {
  const dispatch = useAppDispatch();

  const { quizCategory } = useParams<{ quizCategory: string }>();

  useEffect(() => {
    dispatch(getCategoryQuiz(quizCategory));
  }, [quizCategory, dispatch]);
  const { categoryFetchState } = useAppSelector((state) => state.quizzes);
  return (
    <BackgroundContainer
      className="Category__background-container"
      justifyContent="normal"
      alignItems="center"
      overflow="visible"
    >
      <div className="Quizzes">
        <div className="Category__field-container">
          <TextFieldCategory className="Category__textfield" variant="filled" />
          <LoaderSpinner
            css={`
              position: absolute;
              top: 14px;
              right: 30px;
            `}
            loadingState={categoryFetchState}
            size={20}
          />
        </div>
        <QuizList type="category" />
      </div>
    </BackgroundContainer>
  );
};

export default Category;
