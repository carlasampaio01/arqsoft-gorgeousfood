import { Router } from 'express'
import DescriptorController from './role.controller'
import { RouteMakerAdmin } from '../../infra/extensions/route.extensions'
import Validations from './role.validations'

const router = Router()
const controller = new DescriptorController()

/**
 *
 * @route GET /api/roles
 * @group Get List of Roles
 * @returns {object} 200 - A list of Roles
 * @returns {Error}  default - Unexpected error
 */

RouteMakerAdmin(router, controller, Validations)

export default router
