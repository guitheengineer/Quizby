import React from 'react';
import { CategoriesButton } from '../categories';

type Props = {
  buttonClassName?: string;
  titleClassName?: string;
};

const CategoriesList = ({ buttonClassName, titleClassName }: Props) => (
  <>
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="Soccer"
    />
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="Movies"
    />
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="Music"
    />
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="Science"
    />
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="TV"
    />
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="History"
    />
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="Gaming"
    />
    <CategoriesButton
      titleClassName={titleClassName}
      buttonClassName={buttonClassName}
      title="Misc"
    />
  </>
);

export default CategoriesList;
