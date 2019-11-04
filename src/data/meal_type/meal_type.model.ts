import * as mongoose from "mongoose";
import {
  Languages,
  Default
} from "../../infra/extensions/languages.extensions";
import * as mongooseIntl from "mongoose-intl";
import * as mongoose_delete from "mongoose-delete";

export interface IMealType {
  description: string;
}

export const MealTypeModel = new mongoose.Schema(
  {
    description: {
      type: String,
      required: "Enter the description",
      intl: true
    }
  },
  { timestamps: true }
);

MealTypeModel.plugin(mongoose_delete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});
MealTypeModel.plugin(mongooseIntl, {
  languages: Languages,
  defaultLanguage: Default,
  virtualObject: true
});

export const MealType = mongoose.model("meal_type", MealTypeModel);
