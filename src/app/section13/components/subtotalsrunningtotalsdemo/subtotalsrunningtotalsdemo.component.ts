import { Component } from '@angular/core';
import { CustomdemoService } from '../../../services/customdemo.service';
@Component({
  selector: 'app-subtotalsrunningtotalsdemo',
  templateUrl: './subtotalsrunningtotalsdemo.component.html',
  styleUrls: ['./subtotalsrunningtotalsdemo.component.css']
})
export class SubtotalsrunningtotalsdemoComponent {

  orderDetObj: any = []; //Store order details 
  grandTotal = 0 ; //Store grand total

  constructor(private landingSrv: CustomdemoService) { }

  ngOnInit(): void {
    this.getOrderDetails();
  }

  getOrderDetails(){
    this.landingSrv.getOrderData().subscribe((data: any) => {

      if (data) {
          let orderId = 0;
          let runningAmt = 0; 
          let runningOrderTotal = 0; 
          let billAmt = 0;
  
  data.forEach((order: { ORDERID: number; BILLAMOUNT: number; }) => {   
    if(orderId == 0){
      orderId = order.ORDERID;
      runningAmt = runningAmt + order.BILLAMOUNT;
      runningOrderTotal = runningOrderTotal + order.BILLAMOUNT;
      billAmt = billAmt + order.BILLAMOUNT;
      this.pushData(order,runningAmt,runningOrderTotal);   
    }  
    else{

      if(orderId == order.ORDERID){
        runningAmt = runningAmt + order.BILLAMOUNT;
        runningOrderTotal = runningOrderTotal + order.BILLAMOUNT;
        billAmt = billAmt + order.BILLAMOUNT;
        this.pushData(order,runningAmt,runningOrderTotal);   
      }
      else{
        runningOrderTotal = 0;
        this.pushData('',billAmt,runningOrderTotal);
        billAmt = 0;
        orderId = order.ORDERID;
        runningAmt = runningAmt + order.BILLAMOUNT;
        runningOrderTotal = runningOrderTotal + order.BILLAMOUNT;
        billAmt = billAmt + order.BILLAMOUNT;
        this.pushData(order,runningAmt,runningOrderTotal);
      }
    }   
  });  

  this.pushData('',billAmt,runningOrderTotal);
  
  }
});

}

pushData(order: any,amt: number,runningOrderTotal: number){ 

  if(order != ''){

    let dataToPush =   {
      "ORDERID":order.ORDERID,
      "ORDERDATE":order.ORDERDATE,
      "COMPANYNAME":order.COMPANYNAME,
      "PRODUCTNAME":order.PRODUCTNAME,
      "UNITPRICE":order.UNITPRICE,
      "QUANTITY":order.QUANTITY,
      "BILLAMOUNT":order.BILLAMOUNT,
      "RUNNINGAMT": amt,
      "RUNNINGTOTAL": runningOrderTotal

    };
    this.orderDetObj.push(dataToPush);

  }
  else
  {
    let dataToPush =   {
      "ORDERID":'',
      "ORDERDATE":'',
      "COMPANYNAME":'',
      "PRODUCTNAME":'',
      "UNITPRICE":'',
      "QUANTITY":'',
      "BILLAMOUNT":amt,
      "RUNNINGAMT": '',
      "RUNNINGTOTAL": ''
    };
    this.orderDetObj.push(dataToPush);
    this.grandTotal = this.grandTotal + amt;

  }
  
  }

}





