import PurchaseService from "./purchase.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class PurchaseController extends BaseController {
  constructor() {
    super(new PurchaseService());
  }
}
