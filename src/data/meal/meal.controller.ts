import MealService from "./meal.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class MealController extends BaseController {
  constructor() {
    super(new MealService());
  }
}
