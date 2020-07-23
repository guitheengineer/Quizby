const { userModel } = require('../../models');

exports.checkIfUserExists = async (req, res) => {
  try {
    const userExists = await userModel.exists({ username: req.body.username });
    if (userExists) {
      return res.status(200).json({
        userExists: true,
      });
    }

    return res.status(200).json({
      userExists: false,
    });
  } catch (err) {
    return res.status(500).json({
      err,
    });
  }
};
