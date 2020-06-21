import React, { useEffect } from "react";
import { fetchData } from "../../asyncActions/fetchQuestions";

function Question({ data, dispatch }) {
  useEffect(() => {
    dispatch(fetchData());
    console.log(data.question.length);
  }, []);

  return (
    <div className="App__container--question">
      <span className="App__container--question--bf">-</span>
      {data.question}
    </div>
  );
}

export default Question;
