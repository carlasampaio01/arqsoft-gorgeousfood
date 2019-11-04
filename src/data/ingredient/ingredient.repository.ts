import BaseRepository from "../../infra/extensions/repository.extensions";
import { Ingredient } from "./ingredient.model";

export default class IngredientRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new Ingredient();
    super("ingredients");
    this._order = { description: 1 };
  }
}
