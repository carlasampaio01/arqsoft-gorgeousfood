import CostumerTypeService from "./costumer_type.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class CostumerTypeController extends BaseController {
  constructor() {
    super(new CostumerTypeService());
  }
}
