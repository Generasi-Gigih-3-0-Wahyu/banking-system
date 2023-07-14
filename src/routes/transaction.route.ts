import express from "express";
import validateResource from "../middleware/validateResource";
import { createTransactionSchema } from "../schema/transaction.schema";
import {
  createTransactionController,
  getTransactionsController,
} from "../controllers/transaction.controller";

const router = express.Router();
const baseURL = "/api/v1";

router.post(
  `${baseURL}/transactions`,
  validateResource(createTransactionSchema),
  createTransactionController
);
router.get(`${baseURL}/transactions`, getTransactionsController);

export default router;
