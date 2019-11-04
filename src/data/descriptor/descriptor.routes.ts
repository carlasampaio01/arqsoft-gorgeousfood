import { Router } from "express";
import DescriptorController from "./descriptor.controller";
import RouteMaker from "../../infra/extensions/route.extensions";
import Validations from "./descriptor.validations";

const router = Router();
const controller = new DescriptorController();

/**
 *
 * @route GET /api/descriptor
 * @group Get List of Descriptors
 * @returns {object} 200 - A list of Descriptors
 * @returns {Error}  default - Unexpected error
 */

RouteMaker(router, controller, Validations);

export default router;
