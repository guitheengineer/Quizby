const { questionsModel, possibleAnswersModel } = require("../models/shitModel");

exports.getData = async (req, res) => {
  try {
    const questionsFind = await questionsModel.find();
    const possibleAnswersFind = await possibleAnswersModel.find();
    console.log(questionsFind);
    res.status(200).json({
      status: "success",

      questionsFind,
      possibleAnswersFind,
    });
  } catch (err) {
    console.log("canyou");
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
