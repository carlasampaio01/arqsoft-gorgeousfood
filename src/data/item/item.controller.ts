import ItemService from "./item.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class ItemController extends BaseController {
  constructor() {
    super(new ItemService());
  }
}
