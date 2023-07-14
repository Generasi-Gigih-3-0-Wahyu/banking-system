import { DocumentType } from "@typegoose/typegoose";
import CustomerModel, { Customer } from "../models/customer.model";

export function createCustomer(input: Partial<Customer>) {
  return CustomerModel.create(input);
}

export function findCustomers() {
  return CustomerModel.find();
}

export function findCustomerById(id: string) {
  return CustomerModel.findById(id);
}

export function updateCustomer(customer: DocumentType<Customer>) {
  return customer.save();
}
