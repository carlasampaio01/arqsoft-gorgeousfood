import MealTypeService from "./meal_type.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class MealTypeController extends BaseController {
  constructor() {
    super(new MealTypeService());
  }
}
