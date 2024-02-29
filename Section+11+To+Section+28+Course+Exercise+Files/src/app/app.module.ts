import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { CustomdemoService } from './services/customdemo.service';
import { SharedroutingModule } from './sharedrouting/sharedrouting.module';
import { AppComponent } from './app.component';
import { DropdownlistdemoRfaComponent } from './ReactiveFormsApproachDemos/dropdownlistdemo-rfa/dropdownlistdemo-rfa.component';
import { WorkingtextboxesRfaComponent } from './ReactiveFormsApproachDemos/workingtextboxes-rfa/workingtextboxes-rfa.component';
import { WorkingwithradioRfaComponent } from './ReactiveFormsApproachDemos/workingwithradio-rfa/workingwithradio-rfa.component';
import { WorkingwithcheckboxesRfaComponent } from './ReactiveFormsApproachDemos/workingwithcheckboxes-rfa/workingwithcheckboxes-rfa.component';
import { WorkingwithlistboxRfaComponent } from './ReactiveFormsApproachDemos/workingwithlistbox-rfa/workingwithlistbox-rfa.component';
import { DoValidationsDirective } from './customdirectives/do-validations.directive';
import { ValidationsDirectivesDemoComponent } from './TestCustomDirectivesDemos/validations-directives-demo/validations-directives-demo.component';
import { BlockcutcopypasteDirective } from './customdirectives/blockcutcopypaste.directive';
import { TestcustompipesComponent } from './custompipesdemos/testcustompipes/testcustompipes.component';
import { CapitalPipe } from './custompipesdemos/capital.pipe';
import { LengthLimitPipe } from './custompipesdemos/length-limit.pipe';
import { RatingPipe } from './custompipesdemos/rating.pipe';
import { PaginationsortingsearchdemoComponent } from './paginationsortingsearchdemo/paginationsortingsearchdemo.component';
import { LockFilterPipe } from './custompipesdemos/lock-filter.pipe';
import { SubtotalsrunningtotalsdemoComponent } from './subtotalsrunningtotalsdemo/subtotalsrunningtotalsdemo.component';
import { OrdersWithAccordionFunctionalityComponent } from './orders-with-accordion-functionality/orders-with-accordion-functionality.component';
import { MultilevelaccordiondemoComponent } from './multilevelaccordiondemo/multilevelaccordiondemo.component';
import { CRUDDemoListViewComponent } from './cruddemo-list-view/cruddemo-list-view.component';
import { BulkinsertdemoComponent } from './bulkinsertdemo/bulkinsertdemo.component';
import { BulkupdatedemoComponent } from './bulkupdatedemo/bulkupdatedemo.component';
import { Behcomp1Component } from './behcomp1/behcomp1.component';
import { Behcomp2Component } from './behcomp2/behcomp2.component';
import { Behcomp3Component } from './behcomp3/behcomp3.component';
import { Behcomp4Component } from './behcomp4/behcomp4.component';
import { BehmaincompComponent } from './behmaincomp/behmaincomp.component';
import { BehsubparentShowcategoriesComponent } from './behsubparent-showcategories/behsubparent-showcategories.component';
import { BehsubchildShowproductsComponent } from './behsubchild-showproducts/behsubchild-showproducts.component';
import { CookieService } from 'ngx-cookie-service';
import { CookiesdemoComponent } from './cookiesdemo/cookiesdemo.component';
import { ExportToFileFormatsDemoComponent } from './export-to-file-formats-demo/export-to-file-formats-demo.component';
import { ExportAsModule } from 'ngx-export-as';
import { WorkingwithtextboxesTdaComponent } from './TemplateDrivenApproachDemos/workingwithtextboxes-tda/workingwithtextboxes-tda.component';
import { WorkingwithcheckboxesTdaComponent } from './TemplateDrivenApproachDemos/workingwithcheckboxes-tda/workingwithcheckboxes-tda.component';
import { WorkingwithradiobuttonTDAComponent } from './TemplateDrivenApproachDemos/workingwithradiobutton-tda/workingwithradiobutton-tda.component';
import { WorkingwithlistboxTdaComponent } from './TemplateDrivenApproachDemos/workingwithlistbox-tda/workingwithlistbox-tda.component';
import { WorkingwithdropdownTdaComponent } from './TemplateDrivenApproachDemos/workingwithdropdown-tda/workingwithdropdown-tda.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PassrouteparametersdemoComponent } from './routeparametersdemo/passrouteparametersdemo/passrouteparametersdemo.component';
import { ReceiverouteparametersdemoComponent } from './routeparametersdemo/receiverouteparametersdemo/receiverouteparametersdemo.component';
import { ShowallemployeesComponent } from './apiconsumer/showallemployees/showallemployees.component';
import { ShowemployeedetailsComponent } from './apiconsumer/showemployeedetails/showemployeedetails.component';
import { UpdateemployeedetailsComponent } from './apiconsumer/updateemployeedetails/updateemployeedetails.component';
import { DeleteemployeedetailsComponent } from './apiconsumer/deleteemployeedetails/deleteemployeedetails.component';
import { InsertnewemployeeComponent } from './apiconsumer/insertnewemployee/insertnewemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    DropdownlistdemoRfaComponent,
    WorkingtextboxesRfaComponent,
    WorkingwithradioRfaComponent,
    WorkingwithcheckboxesRfaComponent,
    WorkingwithlistboxRfaComponent,
    DoValidationsDirective,
    ValidationsDirectivesDemoComponent,
    BlockcutcopypasteDirective,
    TestcustompipesComponent,
    CapitalPipe,
    LengthLimitPipe,
    RatingPipe,
    PaginationsortingsearchdemoComponent,
    LockFilterPipe,
    SubtotalsrunningtotalsdemoComponent,
    OrdersWithAccordionFunctionalityComponent,
    MultilevelaccordiondemoComponent,
    CRUDDemoListViewComponent,
    BulkinsertdemoComponent,
    BulkupdatedemoComponent,
    Behcomp1Component,
    Behcomp2Component,
    Behcomp3Component,
    Behcomp4Component,
    BehmaincompComponent,
    BehsubparentShowcategoriesComponent,
    BehsubchildShowproductsComponent,
    CookiesdemoComponent,
    ExportToFileFormatsDemoComponent,
    WorkingwithtextboxesTdaComponent,
    WorkingwithcheckboxesTdaComponent,
    WorkingwithradiobuttonTDAComponent,
    WorkingwithlistboxTdaComponent,
    WorkingwithdropdownTdaComponent,   
    HomeComponent,
    NotfoundComponent,
    PassrouteparametersdemoComponent,
    ReceiverouteparametersdemoComponent,
    ShowallemployeesComponent,
    ShowemployeedetailsComponent,
    UpdateemployeedetailsComponent,
    DeleteemployeedetailsComponent,
    InsertnewemployeeComponent
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ExportAsModule,    
    SharedroutingModule
  ],
  providers: [CustomdemoService,CapitalPipe,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
