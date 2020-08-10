const fs = require('fs');
const { userModel } = require('../../models');

// maybe I need to check if the id is the same as the user is
const pathImg = '/home/guilhermesnd/Área de Trabalho/download.jpeg';
module.exports = async (req, res) => {
  const { id } = req.body;

  const data = fs.readFileSync(pathImg);
  const base64image = Buffer.from(data).toString('base64');

  const contentType = `image/${pathImg.split('.').pop()}`;

  const filter = { _id: id };
  const update = { avatar: { base64image, contentType } };

  const doc = await userModel.findOneAndUpdate(filter, update, {
    new: true,
  });
  res.status(200).json({
    status: 'success',
    doc,
  });
};
