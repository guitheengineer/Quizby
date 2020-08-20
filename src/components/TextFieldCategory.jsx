import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { useParams } from 'react-router-dom';

import {
  changeInput,
  selectManipulateReducer,
} from '../slices/manipulateSlice';

const currencies = [
  {
    value: 'soccer',
  },
  {
    value: 'movies',
  },
  {
    value: 'music',
  },
  {
    value: 'science',
  },
  {
    value: 'tv',
  },
  {
    value: 'history',
  },
  {
    value: 'gaming',
  },
  {
    value: 'misc',
  },
];

export default function TextFieldCategory({ variant, style }) {
  const { category: categoryParam } = useParams();

  const dispatch = useDispatch();
  const { category } = useSelector(selectManipulateReducer);

  useEffect(() => {
    dispatch(changeInput({ value: categoryParam, type: 'category', id: '' }));
  }, []);

  function changeCategory(e) {
    dispatch(changeInput({ value: e.target.value, type: 'category', id: '' }));
  }

  return (
    <TextField
      variant={variant}
      className="Create-quiz__name"
      fullWidth
      label="Category"
      required
      onChange={changeCategory}
      value={category}
      select
      style={style}
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.value.charAt(0).toUpperCase() + option.value.slice(1)}
        </MenuItem>
      ))}
    </TextField>
  );
}

TextFieldCategory.propTypes = {
  variant: PropTypes.string,
  style: PropTypes.object,
};

TextFieldCategory.defaultProps = {
  variant: 'outlined',
  style: { marginTop: '2rem', font: '1.6rem Overpass' },
};
