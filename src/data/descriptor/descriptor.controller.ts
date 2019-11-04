import DescriptorService from "./descriptor.service";
import BaseController from "../../infra/extensions/controller.extensions";

export default class DescriptorController extends BaseController {
  constructor() {
    super(new DescriptorService());
  }
}
