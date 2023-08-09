const catchError = require('../utils/catchError');
const Proyectos = require('../models/Proyectos');
const Lenguajes = require('../models/Lenguaje');
const ImgProyectos = require('../models/ImgProyectos');

const getAll = catchError(async(req, res) => {
    const results = await Proyectos.findAll({include:[Lenguajes]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Proyectos.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Proyectos.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Proyectos.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Proyectos.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const setLenguajeProyectos=catchError(async(req,res)=>{
    const {id}=req.params
    const proyecto=await Proyectos.findByPk(id)
    if(!proyecto)return res.json({message:"no existe"}).status(204)
    await proyecto.setLenguajes(req.body)
    const lenguaje=await proyecto.getLenguajes()
    return res.json(lenguaje)
})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setLenguajeProyectos
}