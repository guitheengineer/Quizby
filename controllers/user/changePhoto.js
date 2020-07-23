const fs = require('fs');
const { userModel } = require('../../models');

const pathImg = '';
exports.changePhoto = async (req, res) => {
  const { id } = req.body;
  const data = fs.readFileSync(pathImg);
  const contentType = 'image/png';
  const filter = { _id: id };
  const update = { avatar: { data, contentType } };

  const doc = await userModel.findOneAndUpdate(filter, update, {
    new: true,
  });
  res.contentType(contentType);
  res.status(200).json({
    status: 'success',
    doc,
  });
  console.log(doc);
};
