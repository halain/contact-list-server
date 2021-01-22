import { Response } from "express";

export const successResponse = (resp: Response, respData: any) => {
    
    return resp.json({
                ok:true,
                contact: respData
            });  
}

export const errorResponse = (resp: Response, err: any) => {
    
    return resp.json({
                ok:false,
                message: err
            });  
}