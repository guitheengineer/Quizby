const userModel = require("../models/userModel");
const fs = require("fs");

exports.checkIfUserExists = async (req, res) => {
  try {
    const userExists = await userModel.exists({ username: req.body.username });
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

const pathImg = "";
exports.changePhoto = async (req, res, next) => {
  const { id } = req.body;
  const data = fs.readFileSync(pathImg);
  const contentType = "image/png";
  const filter = { _id: id };
  const update = { avatar: { data, contentType } };

  let doc = await userModel.findOneAndUpdate(filter, update, {
    new: true,
  });
  res.contentType(contentType);
  res.status(200).json({
    status: "success",
    doc,
  });
  console.log(doc);
};
