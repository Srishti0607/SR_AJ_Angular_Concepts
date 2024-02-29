import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomdemoService } from 'src/app/services/customdemo.service';


@Component({
  selector: 'app-workingwithlistbox-rfa',
  templateUrl: './workingwithlistbox-rfa.component.html',
  styleUrls: ['./workingwithlistbox-rfa.component.css']
})
export class WorkingwithlistboxRfaComponent {

  constructor(private landingSrv: CustomdemoService) { }

  reactiveForm!: FormGroup;
  allowanceTypes: any = [];
  finalObj: any = [];
  isMultiple: boolean = true;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
     
      salary: new FormControl(0),
	initialList: new FormControl([]),
      finalList: new FormControl([]),
      allowance: new FormControl(0),
      netSal: new FormControl(0)
    });
    this.getAllowanceTypes();
  }

  getAllowanceTypes() {
    this.landingSrv.getAllowanceTypes().subscribe((data: any) => {
      if (data) {
        this.allowanceTypes = data;
      }
    });
  }

  calculateNetSal()
{
  let totalAllowancePercentage = 0;
    let salary,allowanceamount,netsal=0;

    this.finalObj.forEach((data: { val: string; }) => {
      totalAllowancePercentage = totalAllowancePercentage + parseFloat(data.val);      
    });

    salary=parseFloat(this.reactiveForm.get('salary')!.value);
    allowanceamount=salary * totalAllowancePercentage/100;
    netsal=salary+allowanceamount;

    this.reactiveForm.get('allowance')!.setValue(allowanceamount);
    this.reactiveForm.get('netSal')!.setValue(netsal);
}

  pushData(opr: any)
{
  if (opr == 'R') {

    //code for > Button
if (this.reactiveForm.get('initialList')!.value.length == 1) 
{
  let itemToPush = {
    //10-HRA-0
    "name": this.reactiveForm.get('initialList')!.value[0].split('-')[1],
    "val": this.reactiveForm.get('initialList')!.value[0].split('-')[0]
  };

  this.finalObj.push(itemToPush); //added to right listbox
  
  //removing selected item from the left listbox
  this.allowanceTypes.splice(this.reactiveForm.get('initialList')!.value[0].split('-')[2], 1);
  this.reactiveForm.get('initialList')!.setValue([]);

}
//code for >> button
else
{
  this.reactiveForm.get('initialList')!.value.forEach((data: string) => {

 //10-HRA-0
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

  this.reactiveForm.get('initialList')!.setValue([]);

}
}
  else
  {
    //code for  < button
    if (this.reactiveForm.get('finalList')!.value.length == 1) {
      let itemToPush = {
        "name": this.reactiveForm.get('finalList')!.value[0].split('-')[1],
        "val": this.reactiveForm.get('finalList')!.value[0].split('-')[0]
      };
    //adding item back to left listbox
      this.allowanceTypes.push(itemToPush);

      //remove item from right side listbox
      this.finalObj.splice(this.reactiveForm.get('finalList')!.value[0].split('-')[2], 1);  
      this.reactiveForm.get('finalList')!.setValue([]);
    
      this.finalObj.length == 0 ? (this.reactiveForm.get('allowance')!.setValue(0),this.reactiveForm.get('netSal')!.setValue(0)) : '';

    }
    //code for << button
    else
    {
     this.reactiveForm.get('finalList')!.value.forEach((data: any) => {

    let itemToPush = {
      "name": data.split('-')[1],
      "val": data.split('-')[0]
    };
    this.allowanceTypes.push(itemToPush);

  let index = this.finalObj.findIndex((data1: { name: any; }, index: any) => data1.name === data.split('-')[1]);
  this.finalObj.splice(index, 1);

  });
  this.reactiveForm.get('finalList')!.setValue([]);
  this.finalObj.length == 0 ? (this.reactiveForm.get('allowance')!.setValue(0),this.reactiveForm.get('netSal')!.setValue(0)) : '';
    }
  }


}




}
