import BaseRepository from "../../infra/extensions/repository.extensions";
import { CostumerType } from "./costumer_type.model";

export default class CostumerTypeRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new CostumerType();
    super("costumer_types");
    this._order = { description: 1 };
  }
}
