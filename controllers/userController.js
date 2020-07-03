const userModel = require("../models/userModel");

exports.checkIfUserExists = async function (req, res) {
  try {
    console.log(req.body);
    const userExists = await userModel.exists({ username: req.body.username });
    console.log(userExists, " <<");
    if (userExists)
      return res.status(200).json({
        userExists: true,
      });

    return res.status(200).json({
      userExists: false,
    });
  } catch (err) {
    res.status(500).json({
      err,
    });
  }
};
