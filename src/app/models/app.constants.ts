import { Department, Employee, Customer, Order } from './app.models';
export const Products = [
  {ProductId: 101, ProductName: 'Laptop', Price: 20000, Catgory: 'ECT'},
  {ProductId: 102, ProductName: 'Iron', Price: 2000, Catgory: 'ECL'},
  {ProductId: 103, ProductName: 'Lays', Price: 20, Catgory: 'FOD'}
];

export const Categories = [
  'ECT', 'ECL', 'FOD'
];

export const Departments: Array<Department> = new Array<Department>();
Departments.push(new Department(10, 'D1'));
Departments.push(new Department(20, 'D2'));
Departments.push(new Department(30, 'D3'));

export const Employees: Array<Employee> = new Array<Employee>();
Employees.push(new Employee(101, 'A', 10));
Employees.push(new Employee(102, 'B', 20));
Employees.push(new Employee(103, 'C', 30));
Employees.push(new Employee(104, 'D', 10));
Employees.push(new Employee(105, 'E', 20));
Employees.push(new Employee(106, 'F', 30));

export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer(101, 'A', 'Pune', 'a@gmail.com', 1234));
Customers.push(new Customer(102, 'B', 'Ajmer', 'b@gmail.com', 1231));
Customers.push(new Customer(103, 'C', 'Raipur', 'c@gmail.com', 1232));
Customers.push(new Customer(104, 'D', 'Delhi', 'd@gmail.com', 1233));
Customers.push(new Customer(105, 'E', 'Mumbai', 'e@gmail.com', 1235));

export const Orders: Array<Order> = new Array<Order>();
Orders.push(new Order(1, 'Biscuit', '12/2/2020', 101, 9876));
Orders.push(new Order(2, 'Vegetable', '12/2/2020', 104, 9876));
Orders.push(new Order(3, 'Tomato', '12/2/2020', 105, 9876));
Orders.push(new Order(4, 'Apple', '12/2/2020', 101, 9876));
Orders.push(new Order(5, 'Vineger', '12/2/2020', 101, 9876));
Orders.push(new Order(6, 'Custurd', '12/2/2020', 103, 9876));
Orders.push(new Order(7, 'Mixture', '12/2/2020', 101, 9876));
Orders.push(new Order(8, 'Sweet', '12/2/2020', 103, 9876));
Orders.push(new Order(9, 'Cheez', '12/2/2020', 102, 9876));
Orders.push(new Order(10, 'shoes', '12/2/2020', 101, 9876));
Orders.push(new Order(11, 'mobile', '12/2/2020', 104, 9876));
Orders.push(new Order(12, 'keyboard', '12/2/2020', 105, 9876));
