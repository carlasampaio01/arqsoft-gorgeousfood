import * as mongoose from "mongoose";
import {
  Languages,
  Default
} from "../../infra/extensions/languages.extensions";
import * as mongooseIntl from "mongoose-intl";
import * as mongoose_delete from "mongoose-delete";

export interface IItem {
  expiration_date: Date;
  production_date: Date;
}

export const ItemModel = new mongoose.Schema(
  {
    meal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'meals',
      required: true
    },
    expiration_date: {
      type: Date,
      required: "Enter the expiration date"
    },
    production_date: {
      type: Date,
      required: "Enter the production date"
    }
  },
  { timestamps: true }
);

ItemModel.plugin(mongoose_delete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});
ItemModel.plugin(mongooseIntl, {
  languages: Languages,
  defaultLanguage: Default,
  virtualObject: true
});

export const Item = mongoose.model("items", ItemModel);
