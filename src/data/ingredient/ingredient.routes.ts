import { Router } from "express";
import IngredientController from "./ingredient.controller";
import RouteMaker from "../../infra/extensions/route.extensions";
import Validations from "./ingredient.validations";

const router = Router();
const controller = new IngredientController();

/**
 *
 * @route GET /api/ingredient
 * @group Get List of Ingredients
 * @returns {object} 200 - A list of Ingredients
 * @returns {Error}  default - Unexpected error
 */

RouteMaker(router, controller, Validations);

export default router;
