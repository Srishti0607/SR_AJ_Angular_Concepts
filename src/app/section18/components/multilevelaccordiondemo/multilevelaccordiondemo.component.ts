import { Component } from '@angular/core';
import { CustomdemoService } from '../services/customdemo.service';
@Component({
  selector: 'app-multilevelaccordiondemo',
  templateUrl: './multilevelaccordiondemo.component.html',
  styleUrls: ['./multilevelaccordiondemo.component.css']
})
export class MultilevelaccordiondemoComponent {

  orderFlag:boolean = false;
  orderDetFlag:boolean = false;

  constructor(private landingSrv: CustomdemoService) { }


 employeeDetails: any = [];


  ngOnInit(): void {
    this.getEmployeesDetails();
  }

  getEmployeesDetails(){
    
    this.landingSrv.getEmployeeData().subscribe((data: any) => {
      if (data) {         
        this.employeeDetails = data;
      }
    });
  

}

appendTd(event: { currentTarget: any; }, index: string | number, subIndex: string | number, opr: string) {

  let target = event.currentTarget,
  classList = target.classList;

  if (opr == 'E') {

    if (this.employeeDetails[index].isActive) {        
      this.employeeDetails[index].isActive = false;
      classList.remove('fa-minus');
      classList.add('fa-plus');
    } else {
      this.employeeDetails[index].isActive = true;
      classList.remove('fa-plus');
      classList.add('fa-minus');
    }
  }
  else
  {
    if (this.employeeDetails[index]['order'][subIndex].isActive) {
      this.employeeDetails[index]['order'][subIndex].isActive = false;
      classList.remove('fa-minus');
      classList.add('fa-plus');
    } else {
      this.employeeDetails[index]['order'][subIndex].isActive = true;
      classList.remove('fa-plus');
      classList.add('fa-minus');
    }
  }

}


toggleAll(opr: number) {

  if (opr == 1) {
    this.employeeDetails.forEach((data: { [x: string]: any; }) => {
      if (data['order'].length != 0) {
        let target: HTMLElement;
        let classList: any;
        target = document.getElementById('Id-' + data['EmployeeID'])!;
        classList = target.classList;
        data['isActive'] = true;
        classList.remove('fa-plus');
        classList.add('fa-minus');
       
      }
    })
  }
  else if (opr == 3) {
    this.employeeDetails.forEach((data: { [x: string]: any; }) => {
      if (data['order'].length != 0) {
        let target: HTMLElement;
        let classList: any;
        target = document.getElementById('Id-' + data['EmployeeID'])!;
        classList = target.classList;
        data['isActive'] = false;
        classList.remove('fa-minus');
        classList.add('fa-plus');
      }
    })
  }
  else if (opr == 2) {
    this.employeeDetails.forEach((data: { [x: string]: any; }) => {
      if (data['order'].length != 0) {
        data['order'].forEach((orderDet: { [x: string]: any; }) => {
          if(orderDet['orderDetails'].length != 0){
          orderDet['isActive'] = true;
          let target: HTMLElement;
          let classList: any
          target = document.getElementById('Id-' + orderDet['orderid'])!;
          classList = target.classList;
          classList.remove('fa-plus');
          classList.add('fa-minus');
         
          }
        });
      }
    })
  }
  else{
    this.employeeDetails.forEach((data: { [x: string]: any; }) => {
      if (data['order'].length != 0) {
        data['order'].forEach((orderDet: { [x: string]: any; }) => {
          if(orderDet['orderDetails'].length != 0){
          orderDet['isActive'] = false;
          let target: HTMLElement;
          let classList: any
          target = document.getElementById('Id-' + orderDet['orderid'])!;
          classList = target.classList;
          classList.remove('fa-minus');
          classList.add('fa-plus');
          }
        });
      }
    })
  
  }
  
  
  }


}
