import React from 'react';
import { useHistory } from 'react-router-dom';
import { selectQuizReducer } from 'slices/quizzes-slice';
import { useAppSelector } from 'store';

const LandingQuiz = ({ quiz }: { quiz: any }) => {
  const history = useHistory();
  const { quizzesFetchState } = useAppSelector(selectQuizReducer);
  return quizzesFetchState === 'fulfilled' && quiz ? (
    <div className="Landing-quizzes__quiz">
      <div
        className="Landing-quizzes__bg"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('data:${quiz.image.contentType};base64,${quiz.image.data}')`,
        }}
      />
      <div className="Landing-quizzes__content">
        <h1 className="Landing-quizzes__title">{quiz.name}</h1>
        <p className="Landing-quizzes__paragraph">{quiz.description}</p>
        <button
          onClick={() => history.push(`/quizzes/show/${quiz._id}`)}
          className="Landing-quizzes__button"
          type="button"
        >
          Play
        </button>
      </div>
    </div>
  ) : (
    <div className="Landing-quizzes__quiz">
      <div className="Landing-quizzes__bg" />
      <div className="Landing-quizzes__content">
        <h1 className="Landing-quizzes__title">Loading</h1>
        <p className="Landing-quizzes__paragraph">Loading</p>
        <button disabled className="Landing-quizzes__button" type="button">
          Play
        </button>
      </div>
    </div>
  );
};
export default LandingQuiz;
