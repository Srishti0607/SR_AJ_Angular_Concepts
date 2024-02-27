import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// export const appConfig: ApplicationModule = {
//   // providers: [provideRouter(routes)],
//   declaration:[AppComponent],
//   imports:[BrowserModule,BrowserAnimationsModule,RouterModule.forRoot(routes)],
//   bootstrap:[AppComponent]
// };
