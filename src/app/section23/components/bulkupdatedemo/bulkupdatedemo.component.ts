import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomdemoService } from '../../../services/customdemo.service';

@Component({
  selector: 'app-bulkupdatedemo',
  templateUrl: './bulkupdatedemo.component.html',
  styleUrls: ['./bulkupdatedemo.component.css']
})
export class BulkupdatedemoComponent {

  idObj: any = [];
  selectAll: boolean = false;
 
  strCSVId: string = '';

  itemSelectedFromRadio: any=0;


  constructor(private formBuilder: FormBuilder, 
    private landingSrv: CustomdemoService) { }


    customerForm!: FormGroup; //form group 

    ngOnInit(): void {
      this.customerForm = this.formBuilder.group({
        headerChk: new FormControl(false),
        customerFormArray: this.formBuilder.array([]),
      });
     this.loadData();
    }

    loadData(){
      this.landingSrv.getDataToUpdate().subscribe((data: any) => {

        if (data) {

          (this.customerForm.get('customerFormArray') as FormArray).setValue([]);

          const userCtrl = this.customerForm.get('customerFormArray') as FormArray;
          data.forEach((cust: any) => {            
            userCtrl.push(this.createCustomerForm(cust));
          });
        }
      });
    }
    createCustomerForm(customerData:any) {

      return this.formBuilder.group({
        id: [customerData.id],  
        check:[false],
        CustName: [customerData.CustName, Validators.required],
        CustPosition: [customerData.CustPosition, Validators.required],
        CustCity: [customerData.CustCity, Validators.required],
        CustState: [customerData.CustState, Validators.required]
      });
    }

    getControls() {
      return (this.customerForm.get('customerFormArray') as FormArray).controls;
    }


    updateRecords()
    {
    
      this.customerForm.value["customerFormArray"].forEach((data: any) => {
        this.landingSrv.bulkUpdateData(data).subscribe((data: any) => {
          alert('Data updated successfully!!');            
          });
        })
    
    
    }

    onAllSelectionChange(event: any) {
      this.selectAll = !this.selectAll;

      this.customerForm.value["customerFormArray"].forEach((data: { [x: string]: boolean; id: any; }) => {
           data['check'] = this.selectAll;
           if(this.selectAll){
             this.idObj.push(data.id);
           }else{
             this.idObj = [];
           }
         }); 
    }

    onSelectionChange(item:any) { 

      this.customerForm.get("headerChk")?.setValue(false);
      item['check']=!item.check;

      if(item['check']){
        this.selectAll= item['check'];
        this.idObj.push(item.CustName);
        }else{
          this.selectAll= item['check'];
          const objIdRef = this.idObj.find((ele: any) => ele === item.CustName);
          objIdRef && this.idObj.splice(this.idObj.indexOf(objIdRef), 1);
        }
    }

    bulkDelete(){

      this.idObj.forEach((data: any) => {        
        this.landingSrv.deleteCustomerData(data).subscribe((data: any) => {
          
          this.customerForm = this.formBuilder.group({
            customerFormArray: this.formBuilder.array([]),
          });
         this.loadData();
        });

this.strCSVId = this.idObj.join(',');
alert('Customers with ids: '+this.strCSVId + ' deleted successfully!!');
      });


    }

    onRadioSelectionChange(item:any) { 
      this.itemSelectedFromRadio=item.id;
    }

    deleteOnRadio()
    {
      this.landingSrv.deleteCustomerData(this.itemSelectedFromRadio).subscribe((data: any) => {
          
        this.customerForm = this.formBuilder.group({
          customerFormArray: this.formBuilder.array([]),
        });
        this.loadData();
    });
  }








}
