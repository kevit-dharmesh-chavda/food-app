import { ingrediant } from "../shared-folder/ingrediant.module";

export class Recipe{
   public name : string ;
   public description : string ;
   public imagepath : string;
   public ingridiant : ingrediant[];
   constructor(name:string , description : string , imagepath:string , ingridiant:ingrediant[]){
      
     this.name = name;
     this.description = description;
     this.imagepath = imagepath;  
     this.ingridiant = ingridiant;
     
   }
}