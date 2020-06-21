import React, { useReducer } from "react";
import { createContext } from "react";

const Dispatch = createContext();
const Data = createContext();

export default function Context({ children }) {
  const initialData = {
    possibleAnswers: [],
    question: "",
    answer: [],
    answerSorted: [],
    dataFetched: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "QUESTION_ANSWER_INSERT":
        return {
          ...state,
          question: action.question,
          answer: action.answer,
          possibleAnswers: action.possibleAnswers,
          dataFetched: true,
        };
      case "POSSIBLE_ANSWERS_FILTER":
        return {
          ...state,
          answerSorted: [...action.payload, state.answer],
        };
      default:
        return console.log("default");
    }
  };
  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <Data.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </Data.Provider>
  );
}

export { Data, Dispatch };
