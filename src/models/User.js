import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, unique: true, trim: true },
    celular: { type: String, trim: true },
    tipo_usuario:{ type: String, trim: true },
    ciudad:{ type: String, trim: true },
    farmacia:{ type: String, trim: true },
    puntuacion:{ type: Number, trim: true },
    password: { type: String },

  },
  {
    timestamps: true,
    versionKey: false,
  }
);



export default mongoose.model("User", UserSchema);
