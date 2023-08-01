const catchError = require('../utils/catchError');
const Compra = require('../models/Compra');
const Carrito = require('../models/Carrito');
const sendEmail = require('../utils/sendEmail');
const Ropa = require('../models/Ropa');
const ImgRopa = require('../models/ImgRopa');
const Usuario = require('../models/Usuario');
const getAll = catchError(async(req, res) => {
    const compra=await Compra.findAll({where:{usuarioId:req.usuario.id}})
    return res.json(compra)
});
const compraCarrito=catchError(async(req,res)=>{
    const compraCarr=await Carrito.findAll({
        where:{usuarioId:req.usuario.id},
        include:[{
            model:Usuario,
            attributes:["name"]
        }],
        attributes:["cantidad","usuarioId","ropaId"],
        raw:true
    })
    const ropas = await Promise.all(
        compraCarr.map(async (compra) => {
            const ropa = await Ropa.findOne({
                where: { id: compra.ropaId },
                attributes: ["name", "marca", "color", "precio"],
                include: [{ model: ImgRopa, attributes: ["url"] }],
                raw: true
            });
            return ropa;
        })
    );
    
    // Generar el contenido HTML para cada producto usando map
    const productsHTML = ropas.map((ropa) => `
        <div style="font-family: Arial, sans-serif;padding: 12px; text-align: center; background-color: black;">
            
            <div style="border: 2px solid white; margin: 0 auto; padding: 5px; max-width: 600px;">
                <img src=${JSON.stringify(ropa["imgRopa.url"])} style="max-width: 100%; display: block; margin: 0 auto;">
            </div>
            <div style="display: flex; flex-direction: column; justify-content: space-between; padding-top: 20px;">
                <h2 style="color: #ffffff; padding: 4px; margin: 0 auto; display: flex; justify-content: space-between;"><b style="color: #9191ab;">Marca:</b> ${JSON.stringify(ropa.marca)}</h2>
                <h2 style="color: #ffffff; padding: 4px; margin: 0 auto; display: flex; justify-content: space-between;"><b style="color: #9191ab;">Color:</b> ${JSON.stringify(ropa.color)}</h2>
                <h2 style="color: #ffffff; padding: 4px; margin: 0 auto; display: flex; justify-content: space-between;"><b style="color: #9191ab;">Cantidad:</b> ${JSON.stringify(compraCarr[0].cantidad)}</h2>
                <h2 style="color: #ffffff; padding: 4px; margin: 0 auto; display: flex; justify-content: space-between;"><b style="color: #9191ab;">Precio:</b> ${JSON.stringify(ropa.precio)} $</h2>
                <h2 style="color: #ffffff; padding: 4px; margin: 0 auto; display: flex; justify-content: space-between;"><b style="color: #9191ab;">Total:</b> ${JSON.stringify(compraCarr[0].cantidad * ropa.precio)} $</h2>
            </div>
        </div>
    `).join('');
    await sendEmail({
        to:req.body.email,
        subject:'tienes un pedido de tu tienda',
        
        html:`<h1 style="color: #ffffff; background-color: black; text-align: center;"><b>Tienes un pedido de:</b> ${JSON.stringify(compraCarr[0]["usuario.name"])}</h1><br>${productsHTML}`
    })
    await Compra.bulkCreate(compraCarr)
    await Carrito.destroy({where:{usuarioId:req.usuario.id}})
    
    return res.json({compraCarr,ropas})
})

module.exports = {
    getAll,
    compraCarrito
}