
import express from 'express';

const SERVER_PORT: number =  Number ( process.env.PORT )  || 5000;

export default class Server {

    private static _instance: Server;
    public app: express.Application;
    public port: number;

    private constructor() {
        this.app = express();
        this.port = SERVER_PORT;
    }

   
    public static get instance(){
        return this._instance  || (  this._instance = new this());
    }


    start( callback: Function ){
        
        this.app.listen( this.port, callback() ); 

    }

}