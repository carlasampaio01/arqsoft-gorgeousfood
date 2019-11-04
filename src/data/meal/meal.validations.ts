import { check } from "express-validator/check";
import ValidateFields from "../../infra/middleware/validation.middleware";

const validations = {
  create: [check("description").exists(), check("ingredients").exists(),check("descriptors").exists(), ValidateFields],
  edit: [check("description").exists(), ValidateFields]
};

export default validations;
