import { Router } from 'express'

import AuthRoutes from './../data/auth/auth.routes'

import InfoRoutes from './../data/info/info.routes'
import MealRoutes from './../data/meal/meal.routes'
import DescriptorRoutes from './../data/descriptor/descriptor.routes'
import IngredientRoutes from './../data/ingredient/ingredient.routes'
import ItemsRoutes from './../data/item/item.routes'
import MealTypeRoutes from './../data/meal_type/meal_type.routes'
import CostumerTypesRoutes from './../data/costumer_type/costumer_type.routes'
import RolesRoutes from './../data/role/role.routes'
import PurchasesRoutes from './../data/purchase/purchase.routes'

const router = Router()

router.use('/info', InfoRoutes)
router.use('/auth', AuthRoutes)

router.use('/meals', MealRoutes)
router.use('/descriptors', DescriptorRoutes)
router.use('/ingredients', IngredientRoutes)
router.use('/mealtypes', MealTypeRoutes)
router.use('/items', ItemsRoutes)
router.use('/costumer_types', CostumerTypesRoutes)
router.use('/purchases', PurchasesRoutes)
router.use('/roles', RolesRoutes)

export default router
