import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { Meal } from "./meal.model";
import MealRepository from "./meal.repository";

export default class MealService extends BaseService {
  constructor() {
    super(new MealRepository());
  }
}
