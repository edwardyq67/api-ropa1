const catchError = require('../utils/catchError');
const Usuario = require('../models/Usuario');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');
const getAll = catchError(async(req, res) => {
    const results = await Usuario.findAll();
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Usuario.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Usuario.findByPk(id);
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Usuario.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Usuario.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});
const login=catchError(async(req,res)=>{
    const {gmail,password}=req.body
    const usuario=await Usuario.findOne({where:{gmail}})
    if(!usuario)return res.json('error esto').status(401)
    const passwordt=await bcrypt.compare(password,usuario.password)
    if(!passwordt)return res.json('error comtr').status(401)
    const token=jwt.sign(
        {usuario},
        process.env.TOKEN_SECRET,{expiresIn:'1d'}
    )
    return res.json({usuario,token})
})
module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    login
}