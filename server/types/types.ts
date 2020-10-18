import { Document } from 'mongoose';

export interface QuizOptional extends Partial<Quiz>, Document {}

export interface QuizDocument extends Quiz, Document {}

export interface Quiz {
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

export interface User {
  correctPassword(password: string, userPassword: string): boolean;
  changedPasswordAfter(iat: string): boolean;
  username: string;
  email: string;
  password: string;
  quizzesPlayed: [
    {
      creator: string;
      name: string;
      _id: string;
      image: {
        data: string;
        contentType: string;
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
  passwordChangedAt: Date;
}

export interface UserOptional extends Partial<User>, Document {}
