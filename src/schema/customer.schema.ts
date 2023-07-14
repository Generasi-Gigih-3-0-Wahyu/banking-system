import { TypeOf, number, object, string } from "zod";

export const createCustomerSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    email: string({
      required_error: "Email is required",
    }),
    balance: number({ required_error: "Balance is required" }),
  }),
});

export type CreateCustomerInput = TypeOf<typeof createCustomerSchema>["body"];
