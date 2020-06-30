import {Router} from 'express';
import AlunoController from './controllers/AlunoController';
import DisciplinaController from './controllers/DisciplinaController';
import CursoController from './controllers/CursoController';
import TurmaController from './controllers/TurmaController';
const routes = Router();

//Rotas
routes.get('/',(req, res)=> {
    return res.send('Servidor está funcionando...');
});
//Rotas alunos 
routes.get('/alunos', AlunoController.index);
routes.get('/alunos/:id', AlunoController.show);
routes.post('/alunos', AlunoController.create);
routes.put('/alunos', AlunoController.update);
routes.delete('/alunos', AlunoController.destroy);
//Rotas para disciplinas 
routes.get('/disciplinas', DisciplinaController.index);
routes.get('/disciplinas/:id', DisciplinaController.show);
routes.post('/disciplinas', DisciplinaController.store);
routes.put('/disciplinas', DisciplinaController.update);
routes.delete('/disciplinas', DisciplinaController.destroy);
//Rotas para cursos
routes.get('/cursos', CursoController.index);
routes.get('/cursos/:id', CursoController.show);
routes.post('/cursos', CursoController.store);
routes.put('/cursos', CursoController.update);
routes.delete('/cursos', CursoController.destroy);
//Rotas para Turmas 
routes.get('/curso/:idCurso/turmas', TurmaController.index);
routes.get('/curso/:idCurso/turmas/:id', TurmaController.show);
routes.post('/curso/:idCurso/turmas', TurmaController.store);
routes.put('/curso/:idCurso/turmas', TurmaController.update);
routes.delete('/curso/:idCurso/turmas', TurmaController.destroy);

export default routes;