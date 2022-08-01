import { ingrediant } from "../shared-folder/ingrediant.module"

export class ShoppingListService {
    ingridiant: ingrediant[] = [new ingrediant('Tomato', 1),
    new ingrediant('potato', 2)]

    getIngrediant() {
        return this.ingridiant;
    }

    addIngridiant(ingrdiant: ingrediant) {
        this.ingridiant.push(ingrdiant);
    }
    addIngridiantsfromrecipe(ingridiant: ingrediant[]) {
        this.ingridiant.push(...ingridiant)
    }
}