import { IResponse, IRequest } from '../../interfaces/custom-express'

export const isAdmin = () => (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    if (request.user.role.description == 'admin') {
        return response.success(request, response, next)
    } else {
        return response.error('Needs admin permission to do this operation.')
    }
}

export const isStaff = () => (
    request: IRequest,
    response: IResponse,
    next: Function
) => {
    if (
        request.user.role.description == 'staff' ||
        request.user.role.description == 'admin'
    ) {
        return response.success(request, response, next)
    } else {
        return response.error(
            'Needs staff or admin permission to do this operation.'
        )
    }
}
