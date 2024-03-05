import { Component } from '@angular/core';
import { CustomdemoService } from '../../../../services/customdemo.service';

@Component({
  selector: 'app-workingwithdropdown-tda',
  templateUrl: './workingwithdropdown-tda.component.html',
  styleUrls: ['./workingwithdropdown-tda.component.css']
})
export class WorkingwithdropdownTdaComponent {

  constructor(private landingSrv: CustomdemoService) { }

  countryDetObj: any = []; //store country details getting from service
  countryCodes: any=[];  
  currencyCode: any;
  population: any;
  capital: any;

  
upperLetterObj: any = []; //Store upper alphabets
lowerLetterObj: any = []; //Store upper alphabets
numberObj: any = []; //Store upper alphabets



upperAlpha: any='A';
lowerAlpha: any='a';
allNumbers: any;


  inputDataForDeletion: any='';
  inputDataForSelection: any='';

  inputDataForInsertion: any='';
  insertposition: any='';
  
  initialdata: any='';
  finaldata: any='';

  ngOnInit(): void {
    this.getCountryCodesData();   
    this.initializeList();
  }

   //Get country list with currency codes
   getCountryCodesData() {
    this.landingSrv.getCountryDetails().subscribe((data: any) => {
      if (data) {
        this.countryDetObj = data;
      }
    });

  }

  updateInputs(){
    let det = this.countryCodes;
    this.currencyCode=det.currencyCode;
    this.population=det.population;
    this.capital=det.capital;    
  }

     //Initialize list
     initializeList() {
      this.getUpperAlphabetList();
      this.getLowerAlphabetList();
      this.getNumbersList();
    }

    //Get Upper case alphabet list
   getUpperAlphabetList() {
    let alpha = Array.from(Array(26)).map((e, i) => i + 65);
    this.upperLetterObj = alpha.map((x) => String.fromCharCode(x));
  }
 //Get Lower case alphabet list
 getLowerAlphabetList() {
  let alpha = Array.from(Array(26)).map((e, i) => i + 97);
  this.lowerLetterObj = alpha.map((x) => String.fromCharCode(x));
}

 //Get number alphabet list
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

applyOperation(opr: string) {

  let index = this.upperLetterObj.findIndex((data: any, index: any) => data === (opr == 'U' ? this.initialdata : opr == 'S' ? this.inputDataForSelection : opr == 'D' ? this.inputDataForDeletion : ''));

  switch(opr)
  {
    case "D":
      this.upperLetterObj.splice(index, 1);
      this.inputDataForDeletion='';
      alert("Item has been deleted...");
      break;
    case "S":
      this.upperAlpha=this.inputDataForSelection;
      this.inputDataForSelection='';
      alert('Item Selected Successfully!!');
      break;
    case "U":
      this.upperLetterObj.splice(index, 1),
      this.upperLetterObj.splice(index, 0, this.finaldata);
      alert("Item has been updated successfully..");
      this.initialdata='';
      this.finaldata='';
      break;
  }
}

insertItemInUpperList()
{  
  if (this.insertposition) {
    this.upperLetterObj.splice(this.insertposition, 0, this.inputDataForInsertion);
    this.inputDataForInsertion='';
    this.insertposition='';
  }
  else{
    this.upperLetterObj.push(this.inputDataForInsertion);
    this.inputDataForInsertion='';
  }
}

}
