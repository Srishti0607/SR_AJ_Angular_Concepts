import { Component } from '@angular/core';
import { CustomsharedService } from '../../services/customshared.service';
@Component({
  selector: 'app-passrouteparametersdemo',
  templateUrl: './passrouteparametersdemo.component.html',
  styleUrls: ['./passrouteparametersdemo.component.css']
})
export class PassrouteparametersdemoComponent {

  constructor(private landingSrv: CustomsharedService) { 

  }

categoriesObj: any = [];

 ngOnInit(): void {
    
      this.landingSrv.getbehCategories().subscribe((data: any) => {
        if (data) {
          this.categoriesObj = data;
        }
      });
    
  }
}
