import { Component } from '@angular/core';
import { CustomdemoService } from '../../../../services/customdemo.service';
@Component({
  selector: 'app-workingwithlistbox-tda',
  templateUrl: './workingwithlistbox-tda.component.html',
  styleUrls: ['./workingwithlistbox-tda.component.css']
})

export class WorkingwithlistboxTdaComponent {

  constructor(private landingSrv: CustomdemoService) { }

  salary: any=0;
  initialList: any=[];
  finalList: any=[];  
  allowance: any=0;
  netSal: any=0;


  allowanceTypes: any = [];
  finalObj: any = [];
  isMultiple: boolean = true;

  ngOnInit(): void {
    this.getAllowanceTypes();
  }

  getAllowanceTypes() {
    this.landingSrv.getAllowanceTypes().subscribe((data: any) => {
      if (data) {
        this.allowanceTypes = data;
      }
    });
  }

  pushData(opr:any)
  {
    // > , >>
    if (opr == 'R') {
          //code for > Button
          if (this.initialList.length == 1)
          {
            let itemToPush = {
              //10-HRA-0
              "name": this.initialList[0].split('-')[1],
              "val": this.initialList[0].split('-')[0]
            };
         
            this.finalObj.push(itemToPush); //added to right listbox
            
            //removing selected item from the left listbox
            this.allowanceTypes.splice(this.initialList[0].split('-')[2], 1);
            this.initialList=[];
          }
            //code for >> Button
          else
          {
            this.initialList.forEach((data: string) => {

              //adding selected items to right listbox
              let itemToPush = {
                "name": data.split('-')[1],
                "val": data.split('-')[0]
              }
              this.finalObj.push(itemToPush);
          
          
              //removing selected items from left listbox
              let index = this.allowanceTypes.findIndex((data1: { val: string; }, index: any) => parseInt(data1.val) === parseInt(data.split('-')[0]));
              this.allowanceTypes.splice(index, 1);
          
            });
          
            this.initialList=[];
          
          
          }
    }
    //< , <<
  else
  {
        //code for < Button
      if (this.finalList.length == 1) {
        let itemToPush = {
          "name": this.finalList[0].split('-')[1],
          "val": this.finalList[0].split('-')[0]
        };
      //adding item back to left listbox
        this.allowanceTypes.push(itemToPush);
        //remove item from right side listbox
        this.finalObj.splice(this.finalList[0].split('-')[2], 1);  
        this.finalList=[];
      
        this.finalObj.length == 0 ? (this.allowance=0,this.netSal=0) : '';
      }
      else
      {
        this.finalList.forEach((data: any) => {

          let itemToPush = {
            "name": data.split('-')[1],
            "val": data.split('-')[0]
          };
          this.allowanceTypes.push(itemToPush);
      
        let index = this.finalObj.findIndex((data1: { name: any; }, index: any) => data1.name === data.split('-')[1]);
        this.finalObj.splice(index, 1);
      
        });
        this.finalList=[];
        this.finalObj.length == 0 ? (this.allowance=0,this.netSal=0) : '';

      }

  }
  }

  calculateNetSal()
  {
    let totalAllowancePercentage = 0;
    

    this.finalObj.forEach((data: { val: string; }) => {
      totalAllowancePercentage = totalAllowancePercentage + parseFloat(data.val);      
    });

    this.salary=parseFloat(this.salary);
    this.allowance=this.salary * totalAllowancePercentage/100;
    this.netSal=this.salary+this.allowance;

  }


}
