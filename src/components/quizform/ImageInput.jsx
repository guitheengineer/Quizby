import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeImage } from '../../slices/manipulateSlice';
import Notification from '../Notification';

function ImageInput() {
  const [imageError, setImageError] = useState(false);
  const dispatch = useDispatch();
  const image = useSelector((state) => state.manipulateReducer.image);
  const resetImageError = useCallback(() => {
    setImageError(false);
  }, []);

  function imageChanged(e) {
    const file = e.target.files[0];
    if (file && file.size > 5242880) {
      return setImageError(true);
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const contentType = file.type;
      const data = reader.result.split('base64,').pop();
      dispatch(changeImage({ contentType, data }));
    };
    return null;
  }
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
            image.data !== '' &&
            `url(data:${image.contentType};base64,${image.data}) no-repeat center`,
          border: '1px dashed #7ca0c0',
        }}
        onChange={imageChanged}
      />
      <div className="Quiz-form__add">
        <img
          alt="Insert file"
          src="/put-image.svg"
          className="Quiz-form__put-image"
        />
        <span className="Quiz-form__text">Add image</span>
      </div>
      {imageError && (
        <Notification
          callbackfunction={resetImageError}
          message="Image size too big (max 5bm)"
        />
      )}
    </>
  );
}

export default ImageInput;
