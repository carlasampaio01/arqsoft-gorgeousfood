import BaseRepository from "../../infra/extensions/repository.extensions";
import { Item } from "./item.model";

export default class ItemRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new Item();
    super("items");
    this._order = { expiration_date: 1 };
  }
}
