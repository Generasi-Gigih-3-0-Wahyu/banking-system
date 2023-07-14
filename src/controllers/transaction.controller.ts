import { Request, Response } from "express";
import { CreateTransactionInput } from "../schema/transaction.schema";
import { findCustomerById, updateCustomer } from "../services/customer.service";
import { error, success } from "../utils/baseResponse";
import {
  createTransaction,
  findTransactions,
} from "../services/transaction.service";

export async function createTransactionController(
  req: Request<unknown, unknown, CreateTransactionInput>,
  res: Response
) {
  const body = req.body;

  const sourceCustomer = await findCustomerById(body.sourceId);
  if (!sourceCustomer) {
    return res.status(404).json(error("Customer Not Found", res.statusCode));
  }

  if (sourceCustomer.balance < body.amount) {
    return res.status(400).json(error("Unsufficient Amount", res.statusCode));
  }

  const destinationCustomer = await findCustomerById(body.destinationId);
  if (!destinationCustomer) {
    return res.status(404).json(error("Customer Not Found", res.statusCode));
  }

  try {
    const transaction = await createTransaction({
      sourceId: sourceCustomer,
      destinationId: destinationCustomer,
      amount: body.amount,
    });

    sourceCustomer.balance = sourceCustomer.balance - body.amount;
    try {
      await updateCustomer(sourceCustomer);
    } catch (err: any) {
      return res
        .status(500)
        .json(error("Internal Server Error", res.statusCode));
    }

    destinationCustomer.balance = destinationCustomer.balance + body.amount;
    try {
      await updateCustomer(destinationCustomer);
    } catch (err: any) {
      return res
        .status(500)
        .json(error("Internal Server Error", res.statusCode));
    }

    return res
      .status(201)
      .json(
        success("Successfully Create Transaction", transaction, res.statusCode)
      );
  } catch (err: any) {
    return res.status(500).json(error("Internal Server Error", res.statusCode));
  }
}

export async function getTransactionsController(_req: Request, res: Response) {
  try {
    const transactions = await findTransactions();
    return res
      .status(200)
      .json(
        success(
          "Successfully Get All Transactions",
          transactions,
          res.statusCode
        )
      );
  } catch (err: any) {
    return res.status(500).json(error("Internal Server Error", res.statusCode));
  }
}
