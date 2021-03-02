import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  resetLoadingState,
  selectManipulateReducer,
} from 'slices/manipulate-slice';
import { selectUserReducer } from 'slices/user-slice/user-slice';
import { useAppDispatch, useAppSelector } from 'store';
import { QuizUser, ThunkResponses } from 'types';

type Props = {
  title: string;
  functionType: ({
    quizId,
    name,
    description,
    _id,
    image,
    username,
    creationQuizzes,
    category,
  }: QuizUser) => any;
  loadingState: ThunkResponses;
};

const ButtonSaveQuiz = ({
  title = 'Save',
  functionType,
  loadingState,
}: Props) => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const {
    name,
    description,
    creationQuizzes,
    image,
    category,
    _id: quizId,
  } = useAppSelector(selectManipulateReducer);
  const { _id, username } = useAppSelector(selectUserReducer);

  useEffect(() => {
    if (loadingState === 'fulfilled') {
      history.push(`/quizzes/show/${quizId}`);
      dispatch(resetLoadingState());
    }
  }, [loadingState, dispatch, history, quizId]);

  return (
    <button
      onClick={() => {
        dispatch(
          functionType({
            quizId,
            _id,
            image,
            username,
            name,
            description,
            category,
            creationQuizzes,
          })
        );
      }}
      className="button button--save-quiz"
      type="submit"
    >
      <span>{title}</span>
      <ClipLoader
        loading={loadingState === 'pending'}
        size="14px"
        color="white"
        css={`
          margin-left: 5px;
        `}
      />
    </button>
  );
};

export default ButtonSaveQuiz;
