import { Component, OnInit } from '@angular/core';
import { Employee, Order } from '../../models/app.models';
import { Employees, Orders } from '../../models/app.constants';
import { CommunicationService } from '../../services/app.coomunication.service';

@Component({
  selector: 'app-empreceiver-component',
  template: `
  <div class="container">
    <table class="table table-striped table-bordered table-dark ">
        <thead>
            <tr>
                <th *ngFor="let h of headers">{{h}}</th>
            </tr>
        </thead>
        <tbody>
            <tr *ngFor="let cust  of filteredOrders">
                <td *ngFor="let h of headers">
                    {{cust[h]}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
  `
})
//<app-table-directive [DataSource]="filteredOrders"></app-table-directive>
export class EmpReceiverComponent implements OnInit {
  orders= Orders;
  _order:Order;
  customerId:number;
  _customerIds:Array<number>;
  _filteredOrder:Array<Order>;
  headers:Array<string>;

  constructor(private serv: CommunicationService) {
    this.customerId=0;
    this._customerIds=new Array<number>();
    this._filteredOrder =new Array<Order>();
    this._order=this.orders[0];
    this.headers=new Array<string>();
    for(let h in this._order)
    {
      this.headers.push(h);
    }
    //console.log('emp service Constructor Called');
  }
  // receiver will subscribe to the event from the service
  // and receiv data from the event
  ngOnInit() {
      //console.log('in ngOnInit() method')
      this.serv.emittedCustIds.subscribe((ids) =>{
        this._customerIds=ids;
        //console.log(this._customerIds);

      });
      this.serv.emitValue.subscribe((data) => {
          console.log(`The Received ID value is ${data}`);
          console.log(this.customerId);
          this.customerId = data;

      });
  }

  get filteredOrders(): Array<Order> {
    this._filteredOrder = new Array<Order>();
    if (this.customerId > 0) {
       this._filteredOrder = this.orders.filter((e) => {
         return e.CustomerId === this.customerId;
       });
    } else {
      this._filteredOrder = this.orders.filter(e=>{
        return this._customerIds.includes(e.CustomerId);
      });
    }
    return this._filteredOrder;
  }
}
