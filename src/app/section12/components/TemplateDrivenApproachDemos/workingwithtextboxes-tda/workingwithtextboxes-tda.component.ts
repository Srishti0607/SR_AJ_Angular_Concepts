import { Component } from '@angular/core';

@Component({
  selector: 'app-workingwithtextboxes-tda',
  templateUrl: './workingwithtextboxes-tda.component.html',
  styleUrls: ['./workingwithtextboxes-tda.component.css']
})
export class WorkingwithtextboxesTdaComponent {

  productId: any = 0;
  productName: any;
  cost: any = 0;
  quantity: any = 0;
  billAmt: any;
  discount: any;
  netBillAmt: any;

  calculateVal(){
    this.billAmt = (this.cost * this.quantity);

    if(this.billAmt > 10000)
    {
      this.discount = (10/100 * this.billAmt);
    }
    else
    {
    this.discount = (5/100 * this.billAmt);
    }
    
        this.netBillAmt = (this.billAmt - this.discount);
      }
    }
