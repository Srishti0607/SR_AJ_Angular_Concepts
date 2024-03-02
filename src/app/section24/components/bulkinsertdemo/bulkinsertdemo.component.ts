import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { CustomdemoService } from '../../../services/customdemo.service';


@Component({
  selector: 'app-bulkinsertdemo',
  templateUrl: './bulkinsertdemo.component.html',
  styleUrls: ['./bulkinsertdemo.component.css']
})
export class BulkinsertdemoComponent {

  constructor(private formBuilder: FormBuilder, 
    private landingSrv: CustomdemoService) { }


    customerForm!: FormGroup; //form group 

    ngOnInit(): void {
      this.customerForm = this.formBuilder.group({
        customerFormArray: this.formBuilder.array([]),
      });

      this.addNewRow();
    }

    addNewRow() { 
      const userCtrl = this.customerForm.get('customerFormArray') as FormArray;
      userCtrl.push(this.createCustomerForm());
    }

    createCustomerForm() {
      return this.formBuilder.group({
        CustName: new FormControl('',[Validators.required]),
        CustPosition: new FormControl('',[Validators.required]),
        CustCity: new FormControl('',[Validators.required]),
        CustState: new FormControl('',[Validators.required]),
      });

}

getControls() {
  return (this.customerForm.get('customerFormArray') as FormArray).controls;
}

deleteRow(index: number) {
  const userCtrl = this.customerForm.get('customerFormArray') as FormArray;
  userCtrl.removeAt(index);
}

bulkInsert() {
  console.log(JSON.stringify(this.customerForm.value["customerFormArray"]));

  this.customerForm.value["customerFormArray"].forEach((data: any) => {

    this.landingSrv.bulkInsertData(data).subscribe((data: any) => {

      this.customerForm = this.formBuilder.group({
        customerFormArray: this.formBuilder.array([]),
      });
      this.addNewRow();

    });

  });
}


}
