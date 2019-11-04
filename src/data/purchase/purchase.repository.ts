import BaseRepository from "../../infra/extensions/repository.extensions";
import { Purchase } from "./purchase.model";

export default class PurchaseRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new Purchase();
    super("purchases");
  }
}
