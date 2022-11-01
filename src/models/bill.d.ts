interface Department {
  name: string;
  staff: string;
  position: string;
}

interface School {
  name: string;
}

interface Bill {
  id?: string;
  _id: string;
  to: User | string;
  name: string;
  from: Department;
  subjects: Subject[];
  status: "paid" | "debt" | "expired";
  createdAt: Date;
  updatedAt: Date;
  expiredDate: Date;
}
