import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomdemoService } from 'src/app/services/customdemo.service';

@Component({
  selector: 'app-dropdownlistdemo-rfa',
  templateUrl: './dropdownlistdemo-rfa.component.html',
  styleUrls: ['./dropdownlistdemo-rfa.component.css']
})
export class DropdownlistdemoRfaComponent {

  countryDetObj: any = []; 
  reactiveForm!: FormGroup;

  upperLetterObj: any = []; //Store upper alphabets
  lowerLetterObj: any = []; //Store upper alphabets
  numberObj: any = []; //Store upper alphabets

  baseAmt: any; 
  finalAmount: any;
  conversionResult: any;



  constructor(private landingSrv: CustomdemoService) { }

  ngOnInit()  : void{

    this.reactiveForm = new FormGroup({
      countryCodes: new FormControl([]),
      currencyCode: new FormControl(),
      population: new FormControl(),
	    capital: new FormControl(),

      upperAlpha: new FormControl('A'),
      lowerAlpha: new FormControl('a'),
      allNumbers: new FormControl(),

      inputDataForDeletion: new FormControl(''),
      inputDataForSelection: new FormControl(''),

      inputDataForInsertion: new FormControl(''),
      insertposition:new FormControl(''),
      
      initialdata:new FormControl(''),
      finaldata:new FormControl(''),

      amount: new FormControl(''),
      fromCurr: new FormControl(),
      toCurr: new FormControl(),


    });

    this.getCountryCodesData();
    this.InitializeLists();
  }

 
  getCountryCodesData() {

    this.landingSrv.getCountryDetails().subscribe((data: any) => {
      if (data) {
        this.countryDetObj = data['countries']['country'];
      }
    });

  }

  updateInputs()
  {
    let det = this.reactiveForm.get('countryCodes')!.value;


    this.reactiveForm.get('currencyCode')!.setValue(det.currencyCode);
    this.reactiveForm.get('population')!.setValue(det.population);
    this.reactiveForm.get('capital')!.setValue(det.capital);    
  }

  InitializeLists()
  {
    //A - Z: 65 TO 90, a-z : 97 to 122, 0-9 : 48 to 57

    this.getUpperAlphabetsList();
    this.getLowerAlphabetsList();
    this.getNumbersList();
  }

  getUpperAlphabetsList() {
    let alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.upperLetterObj = alpha.map((x) => String.fromCharCode(x));
  }
   //Get Lower case alphabet list
 getLowerAlphabetsList() {
  let alpha = Array.from(Array(26)).map((e, i) => i + 97);
  this.lowerLetterObj = alpha.map((x) => String.fromCharCode(x));
}

 //Get number list
 getNumbersList() {
  let alpha = Array.from(Array(10)).map((e, i) => i + 48);
  this.numberObj = alpha.map((x) => String.fromCharCode(x));
}

clearDetails()
{
  this.upperLetterObj = [];
  this.lowerLetterObj = [];
  this.numberObj = [];
}

applyOperation(opr: any)
{
  let index = this.upperLetterObj.findIndex((data: any, index: any) => data === (opr == 'U' ? this.reactiveForm.get('initialdata')!.value : opr == 'S' ? this.reactiveForm.get('inputDataForSelection')!.value : opr == 'D' ? this.reactiveForm.get('inputDataForDeletion')!.value : ''));

  switch(opr)
  {
    case "D":
      this.upperLetterObj.splice(index, 1);
      this.reactiveForm.get('inputDataForDeletion')!.setValue('');
      alert("Item has been deleted...");
      break;
    case "S":
      this.reactiveForm.get('upperAlpha')!.setValue(this.reactiveForm.get('inputDataForSelection')!.value);
      this.reactiveForm.get('inputDataForSelection')!.setValue('');
      alert('Item Selected Successfully!!');
      break;
    case "U":
      this.upperLetterObj.splice(index, 1);
      this.upperLetterObj.splice(index, 0, this.reactiveForm.get('finaldata')!.value);
      alert("Item has been updated successfully..");
      this.reactiveForm.get('initialdata')!.setValue('');
      this.reactiveForm.get('finaldata')!.setValue('');
      break;
  }     
}

insertItemInUpperList()
{
  if (this.reactiveForm.get('insertposition')!.value) {
    this.upperLetterObj.splice(this.reactiveForm.get('insertposition')!.value, 0, this.reactiveForm.get('inputDataForInsertion')!.value);
    this.reactiveForm.get('inputDataForInsertion')!.setValue('');
    this.reactiveForm.get('insertposition')!.setValue('');
  }
  else{
    this.upperLetterObj.push(this.reactiveForm.get('inputDataForInsertion')!.value);
    this.reactiveForm.get('inputDataForInsertion')!.setValue('');
  }

}

convertCurrency()
{
  //https://api.exchangerate.host/latest?base=USD


  this.landingSrv.getCurrencyData(this.reactiveForm.get('fromCurr')!.value).subscribe((data: any) => {
    if (data) {      
      this.baseAmt = data.rates[this.reactiveForm.get('toCurr')!.value];
      this.finalAmount = this.reactiveForm.get('amount')!.value * this.baseAmt;
      this.conversionResult=true;
    }});

}


}
