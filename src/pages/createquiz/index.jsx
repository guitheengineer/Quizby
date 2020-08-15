import React from 'react';
import QuizInfo from '../../components/createquiz/QuizInfo';
import CreateQuestions from '../../components/createquiz/CreateQuestions';
import BackgroundContainer from '../../components/backgroundcontainer';
import CreateButton from '../../components/createquiz/CreateButton';
import ButtonSaveQuiz from '../../components/createquiz/ButtonSaveQuiz';

function CreateQuiz() {
  return (
    <BackgroundContainer
      overflow="normal"
      justifyContent="normal"
      alignItems="center"
    >
      <div className="Create-quiz">
        <QuizInfo />
        <CreateQuestions />
        <CreateButton />
        <ButtonSaveQuiz title="Save quiz" />
      </div>
    </BackgroundContainer>
  );
}

export default CreateQuiz;
