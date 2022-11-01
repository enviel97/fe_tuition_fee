interface Transaction {
  id?: string;
  _id: string;
  payer: User | string;
  status: "success" | "failure";
  event: "paid";
  // amount
  content: string;
  receiver?: User | Bill;
  receiverType: string;
  createdAt: Date;
  updatedAt: Date;
}
