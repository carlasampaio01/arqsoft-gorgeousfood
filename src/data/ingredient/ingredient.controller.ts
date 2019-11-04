import IngredientService from "./ingredient.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class IngredientController extends BaseController {
  constructor() {
    super(new IngredientService());
  }
}
