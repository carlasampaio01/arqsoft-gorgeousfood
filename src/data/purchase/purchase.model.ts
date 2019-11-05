import * as mongoose from 'mongoose'
import { Languages, Default } from '../../infra/extensions/languages.extensions'
import * as mongooseIntl from 'mongoose-intl'
import * as mongoose_delete from 'mongoose-delete'

export const PurchaseModel = new mongoose.Schema(
    {
        items: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'items',
                required: 'Enter the items.',
            },
        ],
        costumer_type: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'costumer_types',
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

PurchaseModel.plugin(mongoose_delete, {
    deletedAt: true,
    deletedBy: true,
    overrideMethods: true,
})
PurchaseModel.plugin(mongooseIntl, {
    languages: Languages,
    defaultLanguage: Default,
    virtualObject: true,
})

export const Purchase = mongoose.model('purchases', PurchaseModel)
