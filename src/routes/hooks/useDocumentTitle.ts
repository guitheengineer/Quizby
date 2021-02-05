import { useEffect } from 'react';

export default (title: string) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    } else {
      document.title = 'Quizby';
    }
  }, []);
};
