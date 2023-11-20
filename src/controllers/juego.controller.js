import { fileURLToPath } from 'url';
import path from 'path';
import Usuarios from "../models/User.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);





export const renderjuegos = async (req, res) => {
  console.log(req.user.id);
    
  
  const usuarios = await Usuarios.findById(req.user.id )  .lean();
    console.log(usuarios);
    
    let puntuacion = parseFloat(usuarios.puntuacion) + 1; 
    const score = await Usuarios.findByIdAndUpdate(req.user.id, { puntuacion:puntuacion });
    console.log(score); 


  res.render("juego/juego");
};
  
export const ejecutajuego = (req, res) => {
  console.log("entro");
//  res.redirect("src/juego/juego.html");
  console.log("entro2");

res.render("juego");

};

  
