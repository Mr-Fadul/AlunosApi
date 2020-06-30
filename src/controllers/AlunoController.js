import Aluno from '../models/Aluno'
class AlunoController {
    async index(req, res){ 
        const aluno = await Aluno.find();
        return res.json(aluno);
    }
    async show(req, res){
        const{ra} = req.params;
        const aluno = await Aluno.findOne({ra});
        return res.json(aluno);
    }
    async create(req, res){
        const{nome, email, ra, sexo} = req.body;
        const aluno = await Aluno.findOne({ra});
        if(!aluno){
        const aluno = await Aluno.create({nome, email, ra, sexo});       
        }
        return res.json(aluno);
    }
    async update(req, res){
        const{nome, email, ra, sexo} = req.body;
        const aluno = await Aluno.findOneAndUpdate({ra},{nome, email, sexo});
        return res.json({ok:true});
    }
    async destroy(req, res){
        const {ra} = req.params;
        const aluno = await Aluno.findOneAndRemove({ra});
        return res.json({ok:true});     
    }
}


export default new AlunoController;