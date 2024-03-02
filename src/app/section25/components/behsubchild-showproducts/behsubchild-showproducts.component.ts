import { Component } from '@angular/core';
import { CustomsharedService } from '../services/customshared.service';

@Component({
  selector: 'app-behsubchild-showproducts',
  templateUrl: './behsubchild-showproducts.component.html',
  styleUrls: ['./behsubchild-showproducts.component.css']
})
export class BehsubchildShowproductsComponent {

  constructor(private landingSrv: CustomsharedService) { }

  categoryWiseProducts: any = [];

  ngOnInit(): void {
   
    this.landingSrv.captureBeh.subscribe(resCategoryName => {
      if(resCategoryName != null){
        
        this.landingSrv.getbehCategoryWiseProductsData(resCategoryName).subscribe((data: any) => {
          if (data) {            
            this.categoryWiseProducts = data;
          }
        })     
    }
    });
  }
  
}
