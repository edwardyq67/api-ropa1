const catchError = require('../utils/catchError');
const Comida = require('../models/Comida');
const {Op, where}=require('sequelize')
const getAll = catchError(async(req, res) => {
    const { nombre, precioMin, precioMax, comidaLugarId, imgComidaId } = req.query;
    const where = {};
    if(nombre) where.nombre={[Op.iLike]:`%${nombre}%`}
    if(comidaLugarId) where.comidaLugarId=comidaLugarId
    if (precioMin && precioMax) {
        where.precio = {
          [Op.between]: [precioMin, precioMax]
        };
      }
    const results = await Comida.findAll({
        where:where
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Comida.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Comida.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Comida.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Comida.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setImgComida=catchError(async(req,res)=>{
    const{id}=req.params
    const comida=await Comida.findByPk(id)
    if(!comida)return res.json({message:'no existe'}).status(204)
    await comida.setImgComidas(req.body)
    const imagen=await comida.getImgComidas()
    return res.json(imagen)
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setImgComida
}