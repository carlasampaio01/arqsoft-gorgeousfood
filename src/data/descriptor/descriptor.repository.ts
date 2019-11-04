import BaseRepository from "../../infra/extensions/repository.extensions";
import { Descriptor } from "./descriptor.model";

export default class DescriptorRepository extends BaseRepository {
  private _new: Document;
  constructor() {
    const _new = new Descriptor();
    super("descriptors");
    this._order = { description: 1 };
  }
}
