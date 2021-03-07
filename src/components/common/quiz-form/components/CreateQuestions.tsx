import {
  selectManipulateReducer,
  removeCreatedQuiz,
} from 'slices/manipulate-slice';
import { useAppSelector, useAppDispatch } from 'store';
import TextFieldCommon from './TextFieldCommon';
import TextFieldFakeAnswer from './TextFieldFakeAnswer';

const CreateQuestions = () => {
  const dispatch = useAppDispatch();
  const { creationQuizzes } = useAppSelector(selectManipulateReducer);

  return (
    <>
      <h6 className="Quiz-form__title Quiz-form__title--questions">
        Questions
      </h6>
      {creationQuizzes.map((quiz, i) => (
        <fieldset key={quiz.id} className="Quiz-form__quiz-creation">
          <legend className="Quiz-form__quiz-legend">Question {i + 1}</legend>
          <button
            type="button"
            onClick={() => dispatch(removeCreatedQuiz(quiz.id))}
            aria-label="Close quiz"
            className="Quiz-form__close"
          />
          <TextFieldCommon
            type="question"
            label="Question"
            required
            multiline
            maxLength={140}
            index={i}
          />
          {[...Array(3)].map((e, fakeIndex) => (
            <TextFieldFakeAnswer
              key={fakeIndex}
              number={fakeIndex + 1}
              index={i}
            />
          ))}
          <TextFieldCommon
            type="answer"
            label="Answer"
            required
            multiline
            maxLength={140}
            index={i}
          />
        </fieldset>
      ))}
    </>
  );
};

export default CreateQuestions;
