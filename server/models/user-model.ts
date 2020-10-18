import validator from 'validator';
import bcrypt from 'bcrypt';
import shortid from 'shortid';
import mongoose from 'mongoose';
import { User, UserOptional } from '../types';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    minlength: 3,
    maxlength: 20,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    validate: validator.isEmail,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
    select: false,
  },
  quizzesPlayed: [
    {
      creator: {
        type: Schema.Types.ObjectId,
        unique: true,
      },
      name: String,
      _id: String,
      image: Object,
      score: Number,
    },
  ],
  quizzesCreated: [
    {
      _id: {
        type: String,
        default: shortid.generate,
      },
      creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      creatorName: {
        type: String,
        required: true,
      },
      image: {
        data: {
          type: String,
          required: true,
        },
        contentType: {
          type: String,
          required: true,
        },
      },
      name: {
        type: String,
        minlength: 4,
        maxlength: 35,
      },
      description: {
        type: String,
        maxlength: 120,
      },
      timesPlayed: {
        type: Number,
        default: 0,
      },
      createdAt: Date,
      category: String,
      questions: [
        {
          question: {
            type: String,
            minlength: 3,
            maxlength: 140,
          },
          answer: {
            type: String,
            minlength: 3,
            maxlength: 20,
          },
          fakeAnswer1: {
            type: String,
            required: true,
            maxlength: 20,
          },
          fakeAnswer2: {
            type: String,
            required: true,
            maxlength: 20,
          },
          fakeAnswer3: {
            type: String,
            required: true,
            maxlength: 20,
          },
        },
      ],
    },
  ],
  passwordChangedAt: Date,
});

userSchema.pre<UserOptional>('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  return next();
});

userSchema.methods.correctPassword = async function (
  loginPwd: string,
  hashPwd: string
) {
  const comparingPassword = await bcrypt.compare(loginPwd, hashPwd);
  return comparingPassword;
};

userSchema.methods.changedPasswordAfter = async function (
  this: User,
  JWTTimeStamp: number
) {
  if (this.passwordChangedAt) {
    const changedTimestamp = this.passwordChangedAt.getTime() / 1000;
    return JWTTimeStamp < changedTimestamp;
  }
  return false;
};

const user = model<UserOptional>('User', userSchema);

export default user;
