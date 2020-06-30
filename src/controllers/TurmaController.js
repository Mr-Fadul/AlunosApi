import Turma from '../models/Turma';
import Curso from '../models/Curso';

class TurmaController{

    async index(req, res){
        const {idCurso}=req.params;
        let turmas = await Turma.find({curso: idCurso});
        res.json(turmas);
    };

    async show(req, res){
        const {idCurso, id} = req.params;
        let turma = await Turma.findOne({_id:id, curso: idCurso}).catch((err)=>{
            return res.status(400).json({mensagem:"Requisição invalida!"});
        });
        await turma.populate('curso').execPopulate();
        return res.json(turma);
    };

    async store(req, res){
        const {idCurso} = req.params;
        const {nome, ano, semestre} = req.body;
        let curso = await Curso.findById(idCurso);
        if(!curso){
            return res.status(400).json({mensagem: "Requisição invalida!"});       
        }     
        let turma = await Turma.findOne({ano, semestre, curso:idCurso});
        if(turma){
            return res.status(400).json({mensagem: "Turma já existe!"});       
        }
        turma = await Turma.create({nome, ano, semestre, curso:idCurso});
        await turma.populate('curso').execPopulate();
        return res.json(turma);
    };

    async update(req, res){
        const {idCurso} = req.params;
        const {id, nome, ano, semestre} = req.body;
        let curso = await Curso.findById(idCurso);
        if(!curso){
            return res.status(400).json({mensagem: "Requisição invalida!"});       
        }

        await Turma.findByIdAndUpdate(id,{nome, semestre, ano}).catch((err) => {
            return res.status(400).json({mensagem: "Requisição invalida!"});
        });
        return res.json({mensagem: "Turma alterada com sucesso!"});
    };

    async destroy(req, res){
        const {idCurso} = req.params;
        const {id} = req.body;
        let curso = await Curso.findById(idCurso);
        if(!curso){
            return res.status(400).json({mensagem: "Requisição invalida!"});       
        }
        await Turma.findByIdAndDelete(id).catch((err)=>{
            return res.status(400).json({mensagem:"Requisição invalida!"});
        });
        return res.json({mensagem:"Excluído com sucesso!"});
    };
   
}

export default new TurmaController;
