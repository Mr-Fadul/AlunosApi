import {Schema, model} from 'mongoose';

const DisciplinaModel = Schema({
    nome:String,
    ch:Number,
});

export default model('Disciplina', DisciplinaModel);