import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { Ingredient } from "./ingredient.model";
import IngredientRepository from "./ingredient.repository";

export default class IngredientService extends BaseService {
  constructor() {
    super(new IngredientRepository());
  }
}
