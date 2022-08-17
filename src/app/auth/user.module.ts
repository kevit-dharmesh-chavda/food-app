import { ThisReceiver } from "@angular/compiler";


export class User{
    constructor(public email:string ,  public id:string , private _token : string , private _expiratioDate: Date ){}
    
    get token(){
      if(!this._expiratioDate && new Date()>this._expiratioDate){
        return null;
      }
      return this._token;
    }
}