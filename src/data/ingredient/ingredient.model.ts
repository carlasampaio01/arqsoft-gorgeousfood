import * as mongoose from "mongoose";
import {
  Languages,
  Default
} from "../../infra/extensions/languages.extensions";
import * as mongooseIntl from "mongoose-intl";
import * as mongoose_delete from "mongoose-delete";

export interface IIngredient {
  description: string;
}

export const IngredientModel = new mongoose.Schema(
  {
    description: {
      type: String,
      required: "Enter the description",
      intl: true
    },
    isAllergen: {
      type: Boolean,
      required: "Enter if is allergen"
    }
  },
  { timestamps: true }
);

IngredientModel.plugin(mongoose_delete, {
  deletedAt: true,
  deletedBy: true,
  overrideMethods: true
});
IngredientModel.plugin(mongooseIntl, {
  languages: Languages,
  defaultLanguage: Default,
  virtualObject: true
});

export const Ingredient = mongoose.model("ingredients", IngredientModel);
