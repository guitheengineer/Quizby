import { CSSProperties } from 'react';
import { RouteProps } from 'react-router-dom';

export interface UserResponse extends Pick<User, 'email' | 'password'> {
  _id: string;
  username: string;
}

export interface QuizData extends QuizPercentage, UserSignup {}

export interface UserSignup extends Pick<User, 'email' | 'password'> {
  username: string;
}

export interface ModifyQuiz extends UserSignup, QuizPercentage {}

export interface QuizPercentage {
  percentage: number;
  quizId: string;
}

export interface QuizImage {
  image: {
    data: string;
    contentType: string;
  };
}

export interface QuizForm extends QuizImage {
  category: string;
  description: string;
  _id: string | null;
  name: string;
}

export interface QuizComplete extends QuizForm, QuizImage, QuizPercentage {
  questions: CreationQuizzes;
  _id: string;
}

export interface QuizCreation {
  id: string;
  question: string;
  fakeAnswer1: string;
  fakeAnswer2: string;
  fakeAnswer3: string;
  answer: string;
}
export interface Thunk {
  payloadName: string;
  paramValue: any;
  linkApi: string;
  bodyToSend: any;
}

export type CreationQuizzes = [
  {
    id: string;
    question: string;
    fakeAnswer1: string;
    fakeAnswer2: string;
    fakeAnswer3: string;
    answer: string;
  }
];

export interface QuizUser extends QuizForm, QuizImage {
  quizId: string | null;
  username: string;
  creationQuizzes: any[];
}

export type Fields =
  | 'question'
  | 'fakeAnswer1'
  | 'fakeAnswer2'
  | 'fakeAnswer3'
  | 'answer'
  | 'name'
  | 'description'
  | 'category';

export interface RouteCustomProps extends RouteProps {
  showlogo?: boolean;
  style?: CSSProperties;
  component: any;
  title?: string;
  height?: 'page' | 'full';
  showmenu?: boolean;
  loading?: ThunkResponses;
}

export type ThunkResponses = 'fulfilled' | 'rejected' | 'pending' | null;

export type QuizClient = Partial<Quiz>;

export interface Quiz {
  _id: string;
  creator: string;
  creatorName: string;
  image: {
    data: string;
    contentType: string;
  };
  percentage: number;
  quizId: string;
  name: string;
  description: string;
  timesPlayed: number;
  createdAt: Date;
  category: string;
  questions: [
    {
      question: string;
      answer: string;
      fakeAnswer1: string;
      fakeAnswer2: string;
      fakeAnswer3: string;
    }
  ];
}

export type UserClient = Partial<User>;

interface User {
  username: string;
  email: string;
  password: string;
  quizzesPlayed: [
    {
      creator: string;
      name: string;
      _id: string;
      image: {
        contentType: string;
        data: string;
      };
      score: number;
    }
  ];
  quizzesCreated: [
    {
      _id: string;
      creator: string;
      creatorName: string;
      image: {
        data: string;
        contentType: string;
      };
      name: string;
      description: string;
      timesPlayed: number;
      createdAt: string;
      category: string;
      questions: [
        {
          question: string;
          answer: string;
          fakeAnswer1: string;
          fakeAnswer2: string;
          fakeAnswer3: string;
        }
      ];
    }
  ];
}
