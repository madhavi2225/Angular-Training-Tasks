import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirective } from './custom.directive';
import { ChildComponent } from './madhavi-child/madhavi-child.component';
import { ParentComponent } from './madhavi-parent/madhavi-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
