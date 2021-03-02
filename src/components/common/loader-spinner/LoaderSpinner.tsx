import React from 'react';
import { ClipLoader } from 'react-spinners';
import { ThunkResponses } from '../../../types';

type Props = {
  loadingState: ThunkResponses;
  color?: string;
  size?: string;
  css?: string;
};

const LoaderSpinner = ({
  loadingState,
  color = '#5255CA',
  size = '35',
  css,
}: Props) => (
  <ClipLoader
    loading={loadingState === 'pending'}
    color={color}
    size={size}
    css={css}
  />
);

export default LoaderSpinner;
