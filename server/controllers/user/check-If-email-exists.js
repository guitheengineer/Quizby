const { userModel } = require('../../models');

module.exports = async (req, res) => {
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
};
