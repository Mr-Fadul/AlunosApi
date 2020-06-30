import { Schema, model } from 'mongoose';

const AlunoSchema = new Schema({
    nome: String,
    email: String,
    sexo: String,
    ra: Number,
});

export default model('Aluno', AlunoSchema);