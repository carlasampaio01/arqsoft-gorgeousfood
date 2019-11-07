import { Router } from 'express'
import PurchaseController from './purchase.controller'
import RouteMaker from '../../infra/extensions/route.extensions'
import Validations from './purchase.validations'

const router = Router()
const controller = new PurchaseController()

/**
 *
 * @route GET /api/purchases
 * @group Get List of Purchases
 * @returns {object} 200 - A list of Purchases
 * @returns {Error}  default - Unexpected error
 */

RouteMaker(router, controller, Validations)

export default router
