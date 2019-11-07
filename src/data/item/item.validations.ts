import { check } from 'express-validator/check'
import ValidateFields from '../../infra/middleware/validation.middleware'

const validations = {
    create: [
        check('expiration_date').exists(),
        check('production_date').exists(),
        check('number').exists(),
        check('meal').exists(),
        ValidateFields,
    ],
    edit: [check('expiration_date').exists(), ValidateFields],
}

export default validations
