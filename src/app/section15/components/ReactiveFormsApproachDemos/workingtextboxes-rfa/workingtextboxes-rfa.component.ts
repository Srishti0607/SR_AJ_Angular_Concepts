import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-workingtextboxes-rfa',
  templateUrl: './workingtextboxes-rfa.component.html',
  styleUrls: ['./workingtextboxes-rfa.component.css']
})
export class WorkingtextboxesRfaComponent {

  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      productId: new FormControl('',[Validators.required,Validators.min(100)]),
      productName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      cost: new FormControl('',[Validators.required,Validators.min(500)]),
      quantity: new FormControl('',[Validators.required,Validators.min(5),Validators.max(20)]),
      billAmt: new FormControl({value: '',disabled:true}),
      discount: new FormControl({value: '',disabled:true}),
      netBillAmt: new FormControl({value: '',disabled:true})

    });
  }

  calculateVal()
  {
    let cost,quantity,billamt,discount,netbillamt: number = 0;

    cost=this.reactiveForm.get('cost')!.value;
    quantity=this.reactiveForm.get('quantity')!.value;

    billamt=cost*quantity;

    if(billamt > 10000)
    {
      discount=billamt*10/100;
    }
    else{
      discount=billamt*5/100;
    }

    netbillamt=billamt-discount;

    this.reactiveForm.get('billAmt')!.setValue(billamt);
    this.reactiveForm.get('discount')!.setValue(discount);
    this.reactiveForm.get('netBillAmt')!.setValue(netbillamt);


  }

}
