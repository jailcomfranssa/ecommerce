import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './templete/header/header.component';
import { MainComponent } from './templete/main/main.component';
import { FooterComponent } from './templete/footer/footer.component';
import { HeaderTopComponent } from './templete/header/header-top/header-top.component';
import { HeaderMiddleComponent } from './templete/header/header-middle/header-middle.component';
import { HeaderBottomComponent } from './templete/header/header-bottom/header-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeaderTopComponent,
    HeaderMiddleComponent,
    HeaderBottomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
