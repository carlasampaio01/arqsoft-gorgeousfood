import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Purchase } from './purchase.model'
import PurchaseRepository from './purchase.repository'
import ItemService from '../item/item.service'
import { IResponse, IRequest } from '../../interfaces/custom-express'

export default class PurchaseService extends BaseService {
    serviceItem = new ItemService()

    constructor() {
        super(new PurchaseRepository())
    }

    create = async (request: IRequest, response: IResponse) => {
        try {
            const result = await this.save(request.body)
            request.body.items.forEach(async item => {
                await this.serviceItem.setAsSold(item)
            })
            return response.success(result)
        } catch (error) {
            return response.error(error.message, 400, error.errors)
        }
    }
}
