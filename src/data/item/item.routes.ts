import { Router } from "express";
import DescriptorController from "./item.controller";
import RouteMaker from "../../infra/extensions/route.extensions";
import Validations from "./item.validations";

const router = Router();
const controller = new DescriptorController();

/**
 *
 * @route GET /api/items
 * @group Get List of Items
 * @returns {object} 200 - A list of Items
 * @returns {Error}  default - Unexpected error
 */

RouteMaker(router, controller, Validations);

export default router;
