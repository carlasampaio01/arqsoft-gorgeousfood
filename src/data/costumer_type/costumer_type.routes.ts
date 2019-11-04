import { Router } from "express";
import CostumerTypeController from "./costumer_type.controller";
import RouteMaker from "../../infra/extensions/route.extensions";
import Validations from "./costumer_type.validations";

const router = Router();
const controller = new CostumerTypeController();

/**
 *
 * @route GET /api/costumertypes
 * @group Get List of CostumerTypes
 * @returns {object} 200 - A list of CostumerTypes
 * @returns {Error}  default - Unexpected error
 */

RouteMaker(router, controller, Validations);

export default router;
