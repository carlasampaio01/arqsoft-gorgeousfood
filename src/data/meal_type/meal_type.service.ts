import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { MealType } from "./meal_type.model";
import MealTypeRepository from "./meal_type.repository";

export default class MealTypeService extends BaseService {
  constructor() {
    super(new MealTypeRepository());
  }
}
