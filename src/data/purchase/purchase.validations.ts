import { check } from "express-validator/check";
import ValidateFields from "../../infra/middleware/validation.middleware";

const validations = {
  create: [check("items").exists(), check("costumer_type").exists(), check("user").exists(), ValidateFields],
  edit: [check("items").exists(), ValidateFields]
};

export default validations;
