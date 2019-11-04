import BaseRepository from "../../infra/extensions/repository.extensions";
import BaseService from "../../infra/extensions/service.extensions";
import { Item } from "./item.model";
import ItemRepository from "./item.repository";

export default class ItemService extends BaseService {
  constructor() {
    super(new ItemRepository());
  }
}
