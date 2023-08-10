const catchError = require('../utils/catchError');
const sendEmail = require('../utils/sendEmail');

const sayHi = catchError(async(req, res) => {
    const{nombre,correo,telefono,asunto}=req.body
    await sendEmail({
            to: "edwardyq200167@gmail.com",
            subject: "trabajo desde mi portafolio",
            html: `<h2>Te busca ${nombre} para trabajar</h2>
                <h4><b>CORREO: </b>${correo}</h4>
                <h4><b>TELEFONO: </b>${telefono}</h4>
                <p>${asunto}</p>
            `
    })
    return res.json("Email sent succesfully");
})
module.exports = {
    
    sayHi
}