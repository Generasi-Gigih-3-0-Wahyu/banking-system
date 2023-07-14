import {
  Ref,
  getModelForClass,
  modelOptions,
  prop,
} from "@typegoose/typegoose";
import { Customer } from "./customer.model";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Transaction {
  @prop({ ref: () => Customer })
  sourceId: Ref<Customer>;

  @prop({ ref: () => Customer })
  destinationId: Ref<Customer>;

  @prop({ default: 0 })
  amount: number;
}

const TransactionModel = getModelForClass(Transaction);

export default TransactionModel;
