import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
type Props = {
  title: string;
  buttonClassName?: string;
  titleClassName?: string;
};

const CategoriesButton = ({
  title,
  buttonClassName = 'Quizzes__categories-button',
  titleClassName = 'Quizzes__categories-title',
}: Props) => {
  const [img, setImg] = useState();
  const history = useHistory();

  useEffect(() => {
    import(`assets/category-images/${title.toLowerCase()}.png`).then((img) =>
      setImg(img.default)
    );
  }, [title]);

  return (
    <button
      className={buttonClassName}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      onClick={() => history.push(`/quizzes/category/${title.toLowerCase()}`)}
      type="button"
    >
      <span className={titleClassName}>{title}</span>
    </button>
  );
};

export default CategoriesButton;
