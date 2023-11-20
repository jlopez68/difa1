import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
console.log("aqui");

import User from "../models/User.js";
console.log("aqui1");

passport.use(

  new LocalStrategy(
    { usernameField: "email",},
      async (email, password, done) => {
      // Match Email's User
      const user = await User.findOne({ email: email});
      console.log("aqui3");
      
      if (!user) {return done(null, false, { message: "Usuario no Existe o sin permiso de acceso" });}


      return done(null, user);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});
