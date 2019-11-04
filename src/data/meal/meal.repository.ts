import BaseRepository from "../../infra/extensions/repository.extensions";
import { Meal } from "./meal.model";

export default class MealRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new Meal();
    super("meals");
    this._order = { description: 1 };
  }
}
