import { Router } from "express";
import MealTypeController from "./meal_type.controller";
import RouteMaker from "../../infra/extensions/route.extensions";
import Validations from "./meal_type.validations";

const router = Router();
const controller = new MealTypeController();

/**
 *
 * @route GET /api/mealtypes
 * @group Get List of MealTypes
 * @returns {object} 200 - A list of MealTypes
 * @returns {Error}  default - Unexpected error
 */

RouteMaker(router, controller, Validations);

export default router;
