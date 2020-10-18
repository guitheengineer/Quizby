import React from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
  title: string;
};
const CategoriesButton = ({ title }: Props) => {
  const history = useHistory();
  const buttonClicked = () => {
    history.push(`/quizzes/category/${title.toLowerCase()}`);
  };
  return (
    <button
      style={{
        backgroundImage: `url('./category-images/${title.toLowerCase()}.png')`,
      }}
      onClick={buttonClicked}
      type="button"
    >
      <span>{title}</span>
    </button>
  );
};

export default CategoriesButton;
