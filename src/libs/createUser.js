import User from "../models/User.js";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "admin@localhost" });

  if (userFound) return;

  const newUser = new User({
    name: 'Administrador',
    email: "admin@localhost",
    password: "1234",
    tipo_usuario: "Administrador"
  });

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};
