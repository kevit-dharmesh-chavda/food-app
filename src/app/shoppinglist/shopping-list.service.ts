import { Subject } from "rxjs";
import { ingrediant } from "../shared-folder/ingrediant.module"

export class ShoppingListService {

    ingridiant: ingrediant[] = [new ingrediant('Tomato', 1),
    new ingrediant('potato', 2)]
    edittoingrediant = new Subject<number>() 
     index : number; 
    getIngrediant() {
        return this.ingridiant;
    }

    addIngridiant(ingrdiant: ingrediant) {
        this.ingridiant.push(ingrdiant);
    }
    addIngridiantsfromrecipe(ingridiant: ingrediant[]) {
        this.ingridiant.push(...ingridiant)
    }
    getEditIngrediant(index:number){
        return this.ingridiant[index];
    }
    updatedIngrediant(index:number, ingridiant:ingrediant){
          this.ingridiant[index] = ingridiant;
    }
    
}