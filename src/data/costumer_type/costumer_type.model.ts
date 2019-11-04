import * as mongoose from "mongoose";
import {
  Languages,
  Default
} from "../../infra/extensions/languages.extensions";
import * as mongooseIntl from "mongoose-intl";
import * as mongoose_delete from "mongoose-delete";

export interface ICostumerType {
  description: string;
}

export const CostumerTypeModel = new mongoose.Schema(
  {
    description: {
      type: String,
      required: "Enter the description",
      intl: true
    },
    nutricionalValue: {
      type: String,
      required: "Enter the nutricional value",
      intl: true
    }
  },
  { timestamps: true }
);

CostumerTypeModel.plugin(mongoose_delete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});
CostumerTypeModel.plugin(mongooseIntl, {
  languages: Languages,
  defaultLanguage: Default,
  virtualObject: true
});

export const CostumerType = mongoose.model("costumer_types", CostumerTypeModel);
