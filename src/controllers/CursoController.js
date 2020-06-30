import Curso from '../models/Curso';

class CursoController{

    async index(req, res){
        let cursos = await Curso.find();
        res.json(cursos);
    };

    async show(req, res){
        const {id} = req.params;
        let cursos = await Curso.findById(id).catch((err)=>{
            return res.status(400).json({mensagem:"Requisição invalida!"});
        });
    };

    async store(req, res){
        const {nome, sigla} = req.body;
        let cursos = await Curso.findOne({nome});
        if(cursos){
            return res.status(400).json({mensagem: "Nome do curso já existe!"});       
        }
        cursos = await Curso.create({nome,sigla});
        return res.json(cursos);
    };

    async update(req, res){
        const {id, nome, sigla} = req.body;
        await Curso.findByIdAndUpdate(id,{nome, sigla}).catch((err) => {
            return res.status(400).json({mensagem: "Requisição invalida!"});
        });
        return res.json({mensagem: "Alterado com sucesso!"});
    };

    async edit(req, res){

    };
    
    async destroy(req, res){
        const {id} = req.body;
        await Curso.findByIdAndDelete(id).catch((err)=>{
            return res.status(400).json({mensagem:"Requisição invalida!"});
        });
        return res.json({mensagem:"Excluído com sucesso!"});
    };
   
}

export default new CursoController;
