import {Schema, model} from 'mongoose';

const CursoModel = Schema({
    nome:String,   
    sigla: String,
});

export default model('Curso', CursoModel);