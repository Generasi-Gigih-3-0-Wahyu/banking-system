import express from "express";
import validateResource from "../middleware/validateResource";
import { createCustomerSchema } from "../schema/customer.schema";
import {
  createCustomerController,
  getCustomersController,
} from "../controllers/customer.controller";

const router = express.Router();
const baseURL = "/api/v1";

router.get(`${baseURL}/customers`, getCustomersController);
router.post(
  `${baseURL}/customers`,
  validateResource(createCustomerSchema),
  createCustomerController
);

export default router;
