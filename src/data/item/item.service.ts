import BaseRepository from '../../infra/extensions/repository.extensions'
import BaseService from '../../infra/extensions/service.extensions'
import { Item } from './item.model'
import ItemRepository from './item.repository'
import * as mongoose from 'mongoose'

export default class ItemService extends BaseService {
    constructor() {
        super(new ItemRepository())
    }

    setAsSold = async (id: mongoose.Types.ObjectId) => {
        const model = this._repository.findByIdAndUpdate(
            id,
            {
                sold: true,
            },
            {
                new: true,
            }
        )
        if (model) return model
    }
}
