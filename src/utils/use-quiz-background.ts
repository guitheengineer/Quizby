import { useCallback } from 'react';

const useQuizBackground = (quiz: any) => {
  const getQuizBackground = useCallback(() => {
    if (quiz && quiz.image) {
      return {
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('data:${quiz.image.contentType};base64,${quiz.image.data}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    }
  }, [quiz]);
  return getQuizBackground;
};

export default useQuizBackground;
