import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomdemoService } from '../../../services/customdemo.service';
import { Config } from '../../../../Config';

@Component({
  selector: 'app-cruddemo-list-view',
  templateUrl: './cruddemo-list-view.component.html',
  styleUrls: ['./cruddemo-list-view.component.css']
})
export class CRUDDemoListViewComponent {
  reactiveForm!: FormGroup; //form group 
  employeeForm!: FormGroup;
  empDataObj: any = [];

  config = {
    itemsPerPage: 1,
    currentPage: 1,
    totalItems: 0
  };

  cols: any;

  constructor(private formBuilder: FormBuilder,
    private landingSrv: CustomdemoService) {

    this.cols = Config.column;
    this.cols > 3 ? this.cols = 3 : this.cols = this.cols;
    this.config.itemsPerPage = Config.itemsPerPage;



  }

  ngOnInit(): void {

    this.employeeForm = this.formBuilder.group({
      employeeArray: this.formBuilder.array([]),
    });

    this.getData();

    this.reactiveForm = new FormGroup({
      empId: new FormControl('', [Validators.required]),
      empFirst: new FormControl('', [Validators.required]),
      empLast: new FormControl('', [Validators.required]),
      empTitle: new FormControl('NA', [Validators.required]),
      empCourtesy: new FormControl('NA', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      empHasPass: new FormControl('', [Validators.required]),
      empDate: new FormControl('', [Validators.required]),
      empSal: new FormControl('', [Validators.required])
    });

  }

  getData() {
    this.landingSrv.getEmpData().subscribe((data: any) => {
      if (data) {
        this.empDataObj = data;
        this.config.totalItems = this.empDataObj.length;
      }

      const userCtrl = this.employeeForm.get('employeeArray') as FormArray;

      data.forEach((emp: any) => {
        userCtrl.push(this.createEmployeeForm(emp, ''));
      });

      const elm = document.getElementById('grid');
      elm!.style.gridTemplateColumns = `repeat( ${this.cols}, 1fr)`;
    }
    );
  }

  createEmployeeForm(employee: any, opr: any) {
    return this.formBuilder.group({
      id: [{ value: employee._id, disabled: opr == 'I' ? false : true }, [Validators.required]],
      EMPID: [{ value: employee.EMPID, disabled: opr == 'I' ? false : true }, [Validators.required]],
      FIRSTNAME: [{ value: employee.FIRSTNAME, disabled: opr == 'I' ? false : true }, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      LASTNAME: [{ value: employee.LASTNAME, disabled: opr == 'I' ? false : true }, [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      TITLE: [{ value: employee.TITLE, disabled: opr == 'I' ? false : true }, [Validators.required]],
      TITLEOFCOURTESY: [{ value: employee.TITLEOFCOURTESY, disabled: opr == 'I' ? false : true }, [Validators.required]],
      GENDER: [{ value: employee.GENDER, disabled: opr == 'I' ? false : true }, [Validators.required]],
      HASPASSPORT: [{ value: employee.HASPASSPORT, disabled: opr == 'I' ? false : true }, [Validators.required]],
      DATEOFJOINING: [{ value: employee.DATEOFJOINING, disabled: opr == 'I' ? false : true }, [Validators.required]],
      SALARY: [{ value: employee.SALARY, disabled: opr == 'I' ? false : true }, [Validators.required]]
    });
  }

  onPageChange(e: number) {
    this.config.currentPage = e;
  }

  fieldGlobalIndex(index: number) {
    console.log((this.config.itemsPerPage * (this.config.currentPage - 1)) + index);
    return (this.config.itemsPerPage * (this.config.currentPage - 1)) + index;

  }

  getControls() {
    return (this.employeeForm.get('employeeArray') as FormArray).controls;
  }


  insertFormData() {
    let payload = {
      "dateOfJoining": this.reactiveForm.get('empDate')!.value,
      "firstName": this.reactiveForm.get('empFirst')!.value,
      "gender": this.reactiveForm.get('gender')!.value,
      "hasPassport": this.reactiveForm.get('empHasPass')!.value,
      "empid": this.reactiveForm.get('empId')!.value,
      "lastName": this.reactiveForm.get('empLast')!.value,
      "salary": this.reactiveForm.get('empSal')!.value,
      "title": this.reactiveForm.get('empTitle')!.value,
      "titleOfCourtesy": this.reactiveForm.get('empCourtesy')!.value
    };

    this.landingSrv.insertEmpData(payload).subscribe((data: any) => {
      this.employeeForm = this.formBuilder.group({
        employeeArray: this.formBuilder.array([]),
      });
      this.cancelInsert();
      this.getData();
    });


  }

  cancelInsert() {
    this.reactiveForm.get('empDate')!.setValue('');
    this.reactiveForm.get('empFirst')!.setValue('');
    this.reactiveForm.get('gender')!.setValue('');
    this.reactiveForm.get('empHasPass')!.setValue('');
    this.reactiveForm.get('empId')!.setValue('');
    this.reactiveForm.get('empLast')!.setValue('');
    this.reactiveForm.get('empTitle')!.setValue('NA');
    this.reactiveForm.get('empCourtesy')!.setValue('NA');
    this.reactiveForm.get('empSal')!.setValue('');
  }

  editForm(index: any) {
    (this.employeeForm.get('employeeArray') as FormArray).controls[index].enable();
  }

  cancelForm(index: any) {
    (this.employeeForm.get('employeeArray') as FormArray).controls[index].disable();
  }

  updateForm(index: any) {
    console.log((this.employeeForm.get('employeeArray') as FormArray).controls)
    this.landingSrv.updateEmpData(JSON.stringify((this.employeeForm.get('employeeArray') as FormArray).controls[index].value),
      (this.employeeForm.get('employeeArray') as FormArray).controls[index].value['EMPID']).subscribe((data: any) => {
        if (data) {
          this.employeeForm = this.formBuilder.group({
            employeeArray: this.formBuilder.array([]),
          });
          this.getData();
        }
      })
  }

  deleteForm(index: any) {
    if (confirm("Are you sure you want to delete the record?")) {
      this.landingSrv.deleteEmpData((this.employeeForm.get('employeeArray') as FormArray).controls[index].value['EMPID']).subscribe((data: any) => {
        console.log(data);

        this.employeeForm = this.formBuilder.group({
          employeeArray: this.formBuilder.array([]),
        });
        this.getData();
      });
    }
  }


}

