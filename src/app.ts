import express  from 'express';
import morgan from 'morgan';
import cors  from 'cors';

//initalizations
const app:any = express();

// setings
app.set('port', process.env.PORT || 3000);

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// routes
app.get('/',(req:any,res:any) => {
    res.send(`The api is at http://localhost:${app.get('port')}`); 
});


export default app;