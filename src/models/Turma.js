import {Schema, model} from 'mongoose';

const TurmaModel = Schema({
    "nome":String,
    "curso": {type: Schema.Types.ObjectId, ref:'Curso'},
    "semestre":Number,
    "ano": Number,
});

export default model('Turma', TurmaModel);