import Server from "./server";
import bodyParser from 'body-parser';
import cors from 'cors';
import contactRoutes from './routes/contacts.routes';


const server = Server.instance;


//Body Parser
server.app.use( bodyParser.urlencoded({ extended: true }) );
server.app.use( bodyParser.json() );
//Cors
server.app.use( cors({ origin: true, credentials: true}) );


server.app.use('/contacts', contactRoutes);


server.start( () => {
    console.log(`Server running on port:  ${server.port}`);
});