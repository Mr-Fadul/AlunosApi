import Disciplina from '../models/Disciplina';

class DisciplinaController{

    async index(req, res){
        let disciplinas = await Disciplina.find();
        res.json(disciplinas);
    };

    async show(req, res){
        const {id} = req.params;
        let disciplinas = await Disciplina.findById(id).catch((err)=>{
            return res.status(400).json({mensagem:"Requisição invalida!"});
        });
    };

    async create(req, res){

    };

    async store(req, res){
        const {nome, ch} = req.body;
        let disciplinas = await Disciplina.findOne({nome});
        if(disciplinas){
            return res.status(400).json({mensagem: "Nome da disciplina já existe!"});       
        }
        disciplinas = await Disciplina.create({nome, ch});
        return res.json(disciplina);
    };

    async update(req, res){
        const {id, nome, ch} = req.body;
        await Disciplina.findByIdAndUpdate(id,{nome, ch}).catch((err) => {
            return res.status(400).json({mensagem: "Requisição invalida!"});
        });
        return res.json({mensagem: "Alterado com sucesso!"});
    };

    async edit(req, res){

    };
    
    async destroy(req, res){
        const {id} = req.body;
        await Disciplina.findByIdAndDelete(id).catch((err)=>{
            return res.status(400).json({mensagem:"Requisição invalida!"});
        });
        return res.json({mensagem:"Excluído com sucesso!"});
    };
   
}

export default new DisciplinaController;
