import { Router } from 'express'
import Authenticated from '../middleware/auth.middleware'
import { isAdmin, isStaff } from '../middleware/permissions.middleware'

const UndefinedRoute = (request: any, response: any) => {
    response.error('Method Undefined', 501)
}

export const RouteMakerAdmin = (
    router: Router,
    controller: any,
    validations?: any
) => {
    router.get(
        '/',
        Authenticated(),
        isAdmin(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id',
        Authenticated(),
        isAdmin(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.get(
        '/:page/:limit',
        Authenticated(),
        isAdmin(),
        validations && validations.paginate ? validations.paginate : [],
        controller.paginate || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        isAdmin(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        isAdmin(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        isAdmin(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
    router.put(
        '/:id/recover',
        Authenticated(),
        isAdmin(),
        validations && validations.recover ? validations.recover : [],
        controller.recover || UndefinedRoute
    )
}

const RouteMaker = (router: Router, controller: any, validations?: any) => {
    router.get(
        '/',
        Authenticated(),
        isStaff(),
        validations && validations.find ? validations.find : [],
        controller.find || UndefinedRoute
    )
    router.get(
        '/:id',
        Authenticated(),
        isStaff(),
        validations && validations.get ? validations.get : [],
        controller.get || UndefinedRoute
    )
    router.get(
        '/:page/:limit',
        Authenticated(),
        isStaff(),
        validations && validations.paginate ? validations.paginate : [],
        controller.paginate || UndefinedRoute
    )
    router.post(
        '/',
        Authenticated(),
        isStaff(),
        validations && validations.create ? validations.create : [],
        controller.create || UndefinedRoute
    )
    router.put(
        '/:id',
        Authenticated(),
        isStaff(),
        validations && validations.edit ? validations.edit : [],
        controller.edit || UndefinedRoute
    )
    router.delete(
        '/:id',
        Authenticated(),
        isStaff(),
        validations && validations.remove ? validations.remove : [],
        controller.remove || UndefinedRoute
    )
    router.put(
        '/:id/recover',
        Authenticated(),
        isStaff(),
        validations && validations.recover ? validations.recover : [],
        controller.recover || UndefinedRoute
    )
}

export default RouteMaker
