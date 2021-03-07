import './button.scss';
import LoaderSpinner from '../loader-spinner/LoaderSpinner';
import { ThunkResponses } from 'types';

type Props = {
  title?: string;
  loadingState: ThunkResponses;
  className?: string;
};

const ButtonForm = ({ title, loadingState, className = '' }: Props) => (
  <button className={`button ${className}`} type="submit">
    <span>{title}</span>
    <LoaderSpinner
      loadingState={loadingState}
      color="white"
      size="14px"
      css={`
        margin-left: 5px;
      `}
    />
  </button>
);

export default ButtonForm;
