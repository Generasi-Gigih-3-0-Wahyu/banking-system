import { Severity, getModelForClass, modelOptions, prop } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class Customer {
  @prop({ required: true, unique: true })
  name: string;

  @prop({ lowercase: true, required: true, unique: true })
  email: string;

  @prop({ default: 0 })
  balance: number;
}

const CustomerModel = getModelForClass(Customer);

export default CustomerModel;
