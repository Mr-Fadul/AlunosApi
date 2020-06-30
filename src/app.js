import express from 'express';
import mongoose  from 'mongoose';
import routes from './routes';


class App{

    constructor(){
        this.app = express();
        mongoose.set('useNewUrlParser',true);
        mongoose.set('useFindAndModify',true);
        mongoose.set('useCreateIndex',true);
        mongoose.set('useUnifiedTopology',true);
        mongoose.connect('mongodb+srv://fadul:fadul@32017@cluster0-qum58.gcp.mongodb.net/test?retryWrites=true&w=majority');
        this.middlewares();
        this.routes();      
    }

    middlewares(){
        this.app.use(express.json());
    }
    routes(){
        this.app.use(routes);
    }
}

export default new App().app;