import * as mongoose from 'mongoose';

export const CorredorSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    peso: { type: String, required: true },
    altura: { type: String, required: true },
    edad: { type: String, required: true },
  },
  { timestamps: true },
);

CorredorSchema.index({ nombre: 1 }, { unique: true });
CorredorSchema.index({ peso: 1 }, { unique: true });
