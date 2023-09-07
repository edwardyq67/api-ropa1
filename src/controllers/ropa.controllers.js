const catchError = require('../utils/catchError');
const Ropa = require('../models/Ropa');
const Versatil = require('../models/Versatil');
const Genero = require('../models/Genero');
const ImgRopa = require('../models/ImgRopa');
const {Op}=require('sequelize')
const getAll = catchError(async(req, res) => {
    const {color,name,marca,generoId,versatilId}=req.query
    const where={}
    if (marca) where.marca={[Op.iLike]:`%${marca}%`}
    if(generoId) where.generoId=generoId
    if (color) where.color={[Op.iLike]:`%${color}%`}
    if(versatilId) where.versatilId=versatilId
    const results = await Ropa.findAll({
    
        include:[{
            model : Versatil,
            attributes:{exclude:['createdAt','updatedAt']}
        },{
            model : Genero,
            attributes:{exclude:['createdAt','updatedAt']}
        },{
            model:ImgRopa,
           
        }],where:where,
        attributes:{exclude:['imgtRopa','createdAt','updatedAt','generoId','versatilId']}
    });
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Ropa.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ropa.findByPk(id,{include:[ImgRopa,Versatil]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Ropa.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Ropa.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setImgRopa=catchError(async(req,res)=>{
    const {id}=req.params
    const ropa=await Ropa.findByPk(id)
    if(!ropa)return res.json({message:"no existe"}).status(404)
    await ropa.setImgRopas(req.body)//el modelo de NewsImg
    const image=await ropa.getImgRopas()
    return res.json(image)

})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setImgRopa
}