import React from 'react';
import { ClipLoader } from 'react-spinners';

type Props = {
  loadingState: string;
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
