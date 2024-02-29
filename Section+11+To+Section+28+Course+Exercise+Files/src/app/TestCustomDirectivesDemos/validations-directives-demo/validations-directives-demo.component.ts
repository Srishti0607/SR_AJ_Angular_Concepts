import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-validations-directives-demo',
  templateUrl: './validations-directives-demo.component.html',
  styleUrls: ['./validations-directives-demo.component.css']
})
export class ValidationsDirectivesDemoComponent {

  reactiveForm!: FormGroup;

ngOnInit(): void {
    this.reactiveForm = new FormGroup({      
      employeeId: new FormControl(0),
      firstName: new FormControl(''),
      address: new FormControl(''),
    });
  }

}
