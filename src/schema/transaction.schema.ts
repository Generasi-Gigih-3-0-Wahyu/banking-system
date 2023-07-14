import { TypeOf, number, object, string } from "zod";

export const createTransactionSchema = object({
  body: object({
    sourceId: string({ required_error: "Source ID is required" }),
    destinationId: string({ required_error: "Destination ID is required" }),
    amount: number({ required_error: "Amount is required" }),
  }),
});

export type CreateTransactionInput = TypeOf<
  typeof createTransactionSchema
>["body"];
