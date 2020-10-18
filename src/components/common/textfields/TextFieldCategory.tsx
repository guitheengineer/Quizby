import React, { useEffect, ChangeEvent, CSSProperties } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useParams } from 'react-router-dom';
import capitalize from 'utils/capitalize';
import { changeInput, selectManipulateReducer } from 'slices/manipulate-slice';
import { useAppSelector, useAppDispatch } from 'store';

const currencies: string[] = [
  'soccer',
  'movies',
  'music',
  'science',
  'tv',
  'history',
  'gaming',
  'misc',
];

type Props = {
  variant?: 'outlined' | 'standard' | 'filled' | undefined;
  style?: CSSProperties;
  className?: string;
};

interface ParamTypes {
  quizCategory: string;
}

const TextFieldCategory = ({
  variant = 'outlined',
  style = { marginTop: '2rem', font: '1.6rem Overpass' },
  className,
}: Props) => {
  const dispatch = useAppDispatch();
  const { quizCategory } = useParams<ParamTypes>();
  const { category } = useAppSelector(selectManipulateReducer);

  useEffect(() => {
    if (quizCategory) {
      dispatch(changeInput({ value: quizCategory, type: 'category' }));
    }
  }, []);

  const changeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInput({ value: e.target.value, type: 'category' }));
  };

  return (
    <TextField
      variant={variant}
      className={`Quiz-form__name ${className}`}
      fullWidth
      label="Category"
      required
      onChange={changeCategory}
      value={category}
      select
      style={style}
    >
      {currencies.map((option) => (
        <MenuItem key={option} value={option}>
          {capitalize(option)}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default TextFieldCategory;
