const catchError = require('../utils/catchError');
const ImgRopa = require('../models/ImgRopa');
const { uploadToCloudinary,deleteFromCloudinary  } = require('../utils/cloudinary');



const getAll = catchError(async(req, res) => {
    const img=await ImgRopa.findAll()
    return res.json(img)
});

const create = catchError(async(req, res) => {
    const { path, filename } = req.file;
    const { url, public_id } = await uploadToCloudinary(path, filename);
    const image = await ImgRopa.create({ url, publicId: public_id });
    return res.status(201).json(image);
});
const remove = catchError(async(req, res) => {
    const { id } = req.params;
    const image = await ImgRopa.findByPk(id);
    if(!image) return res.sendStatus(404);
    await deleteFromCloudinary(image.publicId);
    await image.destroy();
    return res.sendStatus(204);
});



module.exports = {
    getAll,
    create,
    remove
    
}