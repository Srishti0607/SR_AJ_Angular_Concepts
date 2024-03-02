import { Component } from '@angular/core';
import { CustomsharedService } from '../../../../services/customshared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receiverouteparametersdemo',
  templateUrl: './receiverouteparametersdemo.component.html',
  styleUrls: ['./receiverouteparametersdemo.component.css']
})
export class ReceiverouteparametersdemoComponent {

  categoryWiseProductsObj: any = [];
  category: any;



constructor(private landingSrv: CustomsharedService,
    activeRoute: ActivatedRoute) { 


    this.category = activeRoute.snapshot.params["category"];

  }


ngOnInit(): void {      
    this.landingSrv.getbehCategoryWiseProductsData(this.category).subscribe((data: any) => {
      if (data) {
        this.categoryWiseProductsObj = [];
        this.categoryWiseProductsObj = data;
      }
    });
  
}


}
