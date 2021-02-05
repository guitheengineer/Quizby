const userModel = require('../../models').userModel;
const catchAsync = require('../../utils/catchAsync');

module.exports = catchAsync(async (req, res) => {
  const { email } = req.body;
  try {
    const emailExists = await userModel.exists({ email });
    res.status(400).json({
      emailExists,
    });
  } catch (err) {
    res.status(400).json({
      err,
    });
  }
});
