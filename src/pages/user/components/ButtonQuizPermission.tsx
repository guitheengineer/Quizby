import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { setEditQuiz } from 'slices/manipulate-slice';
import sliceName from 'utils/slice-name';
import { useAppSelector, useAppDispatch } from 'store';
import {
  getUserQuizzes,
  deleteQuiz,
  getCurrentQuiz,
} from 'slices/quizzes-slice/async-actions';
import { setQuery, selectQuizReducer } from 'slices/quizzes-slice';
import { QuizComplete } from 'types';

type Props = {
  quiz: QuizComplete;
  maxLength?: number;
  username: string;
};

const ButtonQuizPermission = ({ quiz, maxLength = 40, username }: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { deleteQuizFetchState } = useAppSelector(selectQuizReducer);
  const { _id: quizId } = quiz;
  const quizClicked = () => {
    history.push(`/quizzes/show/${quiz._id}`);
    dispatch(getCurrentQuiz(quiz._id));
    dispatch(setQuery(''));
  };
  const getQuizBackground = () => {
    if (quiz.image) {
      return {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('data:${quiz.image.contentType};base64,${quiz.image.data}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      };
    }
  };

  useEffect(() => {
    if (deleteQuizFetchState === 'fulfilled') {
      dispatch(getUserQuizzes(username));
    }
  }, [deleteQuizFetchState]);

  const editClicked = () => {
    dispatch(setEditQuiz(quiz));
    history.push(`/user/${username}/editquiz`);
  };

  const deleteClicked = () => {
    dispatch(deleteQuiz({ quizId, username }));
  };

  return (
    <div className="User__item-container">
      <button
        className="User__created-quiz"
        style={getQuizBackground()}
        type="button"
        onClick={quizClicked}
      >
        <span>{sliceName(quiz.name, maxLength)}</span>
      </button>
      <div className="User__action-buttons">
        <button
          type="button"
          className=" User__action-button User__action-button--edit"
          onClick={editClicked}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={deleteClicked}
          className="
              User__action-button User__action-button--delete"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ButtonQuizPermission;
