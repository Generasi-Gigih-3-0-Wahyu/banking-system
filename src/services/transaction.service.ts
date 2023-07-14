import TransactionModel, { Transaction } from "../models/transaction.model";

export function createTransaction(input: Partial<Transaction>) {
  return TransactionModel.create(input);
}

export function findTransactions() {
  return TransactionModel.find();
}
