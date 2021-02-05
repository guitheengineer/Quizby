'use strict';
exports.__esModule = true;
exports.useAppDispatch = exports.useAppSelector = void 0;
var toolkit_1 = require('@reduxjs/toolkit');
var react_redux_1 = require('react-redux');
var form_slice_1 = require('slices/form-slice/form-slice');
var quizzes_slice_1 = require('slices/quizzes-slice');
var user_slice_1 = require('slices/user-slice/user-slice');
var general_slice_1 = require('slices/general-slice/general-slice');
var manipulate_slice_1 = require('slices/manipulate-slice');
var demo_slice_1 = require('slices/demo-slice');
var store = toolkit_1.configureStore({
  reducer: {
    general: general_slice_1['default'],
    user: user_slice_1['default'],
    form: form_slice_1['default'],
    quizzes: quizzes_slice_1['default'],
    manipulate: manipulate_slice_1['default'],
    demo: demo_slice_1['default'],
  },
});
exports.useAppSelector = react_redux_1.useSelector;
var useAppDispatch = function () {
  return react_redux_1.useDispatch();
};
exports.useAppDispatch = useAppDispatch;
exports['default'] = store;
