import User from "../models/User.js";
import passport from "passport";

export const renderSignUpForm = (req, res) => res.render("auth/signup");

export const signup = async (req, res) => {
  let errors = [];

  const { name, ciudad, email,  celular, farmacia, tipo_usuario} = req.body;
  const newUser = new User({ name, ciudad, email, celular ,farmacia, tipo_usuario}); 
  newUser.tipo_usuario = "Visitador";
  newUser.puntuacion = 0;
  newUser.password = "1234"
  await newUser.save();

  req.flash("success_msg", "Registro Completado");




  res.redirect("/auth/signin");
};

export const renderSigninForm = (req, res) => res.render("auth/signin");

export const signin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Cerrando Sesion");

      res.redirect("/");
  });
};



  