import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { CostumerType } from "./costumer_type.model";
import CostumerTypeRepository from "./costumer_type.repository";

export default class CostumerTypeService extends BaseService {
  constructor() {
    super(new CostumerTypeRepository());
  }
}
