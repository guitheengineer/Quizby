import React from 'react';
import CategoriesButton from './CategoriesButton';

function CategoriesList() {
  return (
    <>
      <CategoriesButton title="Soccer" />
      <CategoriesButton title="Movies" />
      <CategoriesButton title="Music" />
      <CategoriesButton title="Science" />
      <CategoriesButton title="TV" />
      <CategoriesButton title="History" />
      <CategoriesButton title="Gaming" />
      <CategoriesButton title="Misc" />
    </>
  );
}

export default CategoriesList;
