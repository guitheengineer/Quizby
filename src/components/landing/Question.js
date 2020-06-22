import React, { useEffect } from "react";
import { fetchData } from "../../asyncActions/fetchQuestions";
import { useSelector, useDispatch } from "react-redux";

function Question() {
  const data = useSelector((d) => d.rootReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
    console.log(data.question.length);
  }, []);

  return (
    <div
      style={
        data.question.length <= 30
          ? { fontSize: "3.1rem" }
          : data.question.length <= 50
          ? { fontSize: "2.4rem" }
          : { fontSize: "2.1rem" }
      }
      className="App__container--question"
    >
      <span
        style={{ position: "absolute", top: "0", right: "0", fontSize: "18px" }}
      >
        {data.question.length}
      </span>
      <span className="App__container--question--bf">-</span>
      {data.question}
    </div>
  );
}

export default Question;
