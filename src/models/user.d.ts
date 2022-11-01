interface Name {
  firstname: string;
  lastname: string;
}

interface User {
  id?: string;
  _id: string;
  name: Name;
  avatar?: string;
  email: string;
  gender: "MALE" | "FEMALE" | "PRIVATE";
  friendlyId: string;
  amount: number;
}
