const catchError = require('../utils/catchError');
const Genero = require('../models/Genero');

const getAll = catchError(async(req, res) => {
    const results = await Genero.findAll( {attributes:{exclude:['createdAt','updatedAt']}});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Genero.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Genero.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Genero.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Genero.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}