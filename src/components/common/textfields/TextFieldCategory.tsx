import React, { useEffect, ChangeEvent, CSSProperties } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useParams } from 'react-router-dom';
import capitalize from '../../../utils/capitalize';
import {
  changeInput,
  selectManipulateReducer,
} from '../../../slices/manipulate-slice';
import { useAppSelector, useAppDispatch } from '../../../store';
import { useDispatch } from 'react-redux';

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
  signup?: boolean;
};

interface ParamTypes {
  quizCategory: string;
}

const TextFieldCategory = ({
  variant = 'outlined',
  style = { marginTop: '1.6rem', font: '1.6rem Overpass' },
  className,
  signup = false,
}: Props) => {
  const { quizCategory } = useParams<ParamTypes>();
  const history = useHistory();
  const dispatch = useDispatch();

  const { category } = useAppSelector(selectManipulateReducer);
  return (
    <TextField
      variant={variant}
      className={`Quiz-form__name ${className}`}
      fullWidth
      label="Category"
      required
      value={signup ? quizCategory : category}
      onChange={(e) => {
        if (signup) {
          dispatch(changeInput({ value: e.target.value, type: 'category' }));
        } else {
          history.push(`/quizzes/category/${e.target.value}`);
        }
      }}
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
