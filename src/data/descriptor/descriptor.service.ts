import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { Descriptor } from "./descriptor.model";
import DescriptorRepository from "./descriptor.repository";

export default class DescriptorService extends BaseService {
  constructor() {
    super(new DescriptorRepository());
  }
}
