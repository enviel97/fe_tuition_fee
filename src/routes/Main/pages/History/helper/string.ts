import { parseName } from "@helpers/string";

export function praseTransactionName(receiver?: User | Bill | string) {
  if (!receiver) return "-";
  if (typeof receiver === "string") return receiver;
  // is User
  if (!("name" in receiver)) return "-";
  if (typeof receiver.name === "string") return receiver.name;
  return parseName(receiver.name);
}
