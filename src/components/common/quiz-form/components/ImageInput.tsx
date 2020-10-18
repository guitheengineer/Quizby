import React, { useState, useCallback, ChangeEvent } from 'react';
import { changeImage, selectManipulateReducer } from 'slices/manipulate-slice';
import Notification from 'components/common/notification';
import { useAppSelector, useAppDispatch } from 'store';
import putImage from 'assets/icons/put-image.svg';

const ImageInput = () => {
  const dispatch = useAppDispatch();
  const [imageError, setImageError] = useState(false);
  const { image } = useAppSelector(selectManipulateReducer);

  const resetImageError = useCallback(() => {
    setImageError(false);
  }, [image]);

  const imageChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      if (file && file.size > 5242880) {
        return setImageError(true);
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const contentType = file.type;
        if (reader.result) {
          const data = reader.result.toString().split('base64,').pop() || '';
          dispatch(changeImage({ contentType, data }));
        }
      };
    }
  };
  return (
    <>
      <input
        className="Quiz-form__input
          Quiz-form__input-image"
        alt=""
        type="file"
        accept="image/*"
        style={{
          background:
            image.data && `url(data:${image.contentType};base64,${image.data})`,
          border: '1px dashed #7ca0c0',
        }}
        onChange={imageChanged}
      />
      <div className="Quiz-form__add">
        <img
          alt="Insert file"
          src={putImage}
          className="Quiz-form__put-image"
        />
        <span className="Quiz-form__text">Add image</span>
      </div>
      {imageError && (
        <Notification
          callback={resetImageError}
          message="Image size too big (max 5mb)"
        />
      )}
    </>
  );
};

export default ImageInput;
