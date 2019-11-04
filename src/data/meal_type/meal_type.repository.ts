import BaseRepository from "../../infra/extensions/repository.extensions";
import { MealType } from "./meal_type.model";

export default class MealTypeRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new MealType();
    super("meal_type");
    this._order = { description: 1 };
  }
}
