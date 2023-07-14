import { Request, Response } from "express";
import { createCustomer, findCustomers } from "../services/customer.service";
import { error, success } from "../utils/baseResponse";
import { CreateCustomerInput } from "../schema/customer.schema";

export async function createCustomerController(
  req: Request<unknown, unknown, CreateCustomerInput>,
  res: Response
) {
  const body = req.body;

  try {
    const customer = await createCustomer(body);

    return res
      .status(201)
      .json(success("Successfully Created User", customer, res.statusCode));
  } catch (err: any) {
    if (err.code === 11000) {
      return res
        .status(409)
        .json(error("Customer already exists", res.statusCode));
    }
    return res.status(500).json(error("Internal Server Error", res.statusCode));
  }
}

export async function getCustomersController(_req: Request, res: Response) {
  try {
    const customers = await findCustomers();
    return res
      .status(200)
      .json(success("Successfully get all customers", customers, res.statusCode));
  } catch (err: any) {
    return res.status(500).json(error("Internal Server Error", res.statusCode));
  }
}
