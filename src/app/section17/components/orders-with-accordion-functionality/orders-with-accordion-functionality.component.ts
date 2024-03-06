import { Component } from '@angular/core';
import { CustomdemoService } from '../../../services/customdemo.service';

@Component({
  selector: 'app-orders-with-accordion-functionality',
  templateUrl: './orders-with-accordion-functionality.component.html',
  styleUrls: ['./orders-with-accordion-functionality.component.css']
})
export class OrdersWithAccordionFunctionalityComponent {

  constructor(private landingSrv: CustomdemoService) { }

  orderDetObj: any = []; //Store order details 
  grandTotal: any = 0;

  ngOnInit(): void {
    this.getNewOrderData();
  }

  getNewOrderData() {
    this.landingSrv.getNewOrderData().subscribe((data: any) => {
      if (data) {
        // this.orderDetObj = data[0]['order'];
        this.orderDetObj = data;
        let sum = 0;
        this.orderDetObj.forEach((data: any) => {
          sum = sum + data?.SubTotal;
       });   
        this.grandTotal = sum;
      }
    })
  }

  appendTd(event:any,index:number) 
  {
    let target = event.currentTarget;
    let classList = target.classList;

    if (this.orderDetObj[index].isActive) {
      this.orderDetObj[index].isActive = false;
      classList.remove('fa-minus');
      classList.add('fa-plus');
    }
    else{
      this.orderDetObj[index].isActive = true;
      classList.remove('fa-plus');
      classList.add('fa-minus');
    }
  }


  
toggleAll(opr:any)
{
		if(opr == 1)
		{
      this.orderDetObj.forEach((orderDet: { [x: string]: boolean; }) => {
        orderDet['isActive'] = true;

        let target: HTMLElement;
        let classList: any;
        target = document.getElementById('Id-' + orderDet['ORDERID'])!;
        classList = target.classList;
        classList.remove('fa-plus');
        classList.add('fa-minus');    
      });

		}
		else
		{
      this.orderDetObj.forEach((orderDet: { [x: string]: boolean; }) => {
        orderDet['isActive'] = false;

        let target: HTMLElement;
        let classList: any;
        target = document.getElementById('Id-' + orderDet['ORDERID'])!;
        classList = target.classList;
        classList.remove('fa-minus');
        classList.add('fa-plus');   
      });
		}

}






}
