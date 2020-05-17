export class Department {
  constructor(
    public DeptNo: number,
    public DeptName: string
  ) { }
}

export class Employee {
  constructor(
    public EmpNo: number,
    public EmpName: string,
    public DeptNo: number
  ) { }
}
export class Customer {
  constructor(
    public CustomerId: number,
    public CustomerName: string,
    public city: string,
    public email: string,
    public phoneNo: number,
  ) { }
}

export class Order {
  constructor(
    public OrderId: number,
    public OrderName: string,
    public Date: string,
    public CustomerId: number,
    public Amount: number
  ) { }
}
