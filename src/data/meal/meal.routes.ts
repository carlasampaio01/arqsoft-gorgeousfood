import { Router } from "express";
import MealController from "./meal.controller";
import RouteMaker from "../../infra/extensions/route.extensions";
import Validations from "./meal.validations";

const router = Router();
const controller = new MealController();

/**
 *
 * @route GET /api/meal
 * @group Get List of Meals
 * @returns {object} 200 - A list of Meals
 * @returns {Error}  default - Unexpected error
 */

RouteMaker(router, controller, Validations);

export default router;
