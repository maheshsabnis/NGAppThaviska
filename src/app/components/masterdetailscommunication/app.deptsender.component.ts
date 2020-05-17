import { Component, OnInit } from '@angular/core';
import { Department, Customer } from '../../models/app.models';
import { Departments , Customers} from '../../models/app.constants';
import { CommunicationService } from '../../services/app.coomunication.service';

@Component({
  selector: 'app-deptsender-component',
  template: `
     <div class="container">
    <table class="table table-striped table-bordered table-dark ">
        <thead>
            <tr>
                <th *ngFor="let h of headers">{{h}}</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let cust  of filteredCustomers" (click)="getSelectedRow(cust)">
                <td *ngFor="let h of headers">
                    {{cust[h]}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
  `
})

export class DeptSenderComponent implements OnInit {
  Custmers=Customers;
  _Customer:Customer;
  _customerIds:Array<number>;
  //dept: Department;
  //depts = Departments;
  _filteredCustomer:Array<Customer>;
  searchText: string;
  headers : Array<string>;

  constructor(private serv: CommunicationService) {
    //this.dept = new Department(0, '');
    this._filteredCustomer=new Array<Customer>();
    this.searchText='';
    this._Customer=Customers[0];
    this._customerIds= new Array<number>();
    this.headers = new Array<string>();
    for(let h in this._Customer)
    {
      this.headers.push(h);
    }
  }

  ngOnInit() {
    this.serv.emitSearchValue.subscribe((data) => {
      //console.log(`The Received Searchvalue is ${data}`)
      this.searchText = data;
      console.log(this._Customer);

    });
   }

  get filteredCustomers(): Array<Customer> {
    this._filteredCustomer = new Array<Customer>();
    if (this.searchText) {
       this._filteredCustomer = this.Custmers.filter((e) => {
         const custName=e.CustomerName.toLowerCase();
         const custCity=e.city.toLowerCase();
         return custName.includes(this.searchText) || custCity.includes(this.searchText);
       });
    } else {
      this._filteredCustomer = this.Custmers;
    }
    this._customerIds=[];
    this._filteredCustomer.forEach(element => {
      this._customerIds.push(element.CustomerId);
    });
    this.serv.onEmitIds(this._customerIds);
    return this._filteredCustomer;
  }
  emitChangeIds():void{

  }
  getSelectedRow(evnt): void {
      console.log(evnt);
      this._Customer=evnt;
      this.serv.onEmiteValue(this._Customer.CustomerId);
  }
}

