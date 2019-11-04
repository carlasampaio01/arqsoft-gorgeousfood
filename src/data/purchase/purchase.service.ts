import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { Purchase } from "./purchase.model";
import PurchaseRepository from "./purchase.repository";

export default class PurchaseService extends BaseService {
  constructor() {
    super(new PurchaseRepository());
  }
}
