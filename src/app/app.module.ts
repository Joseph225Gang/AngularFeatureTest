import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestMainComponent } from './test-main/test-main.component';
import { HeroComponent } from './hero/hero.component';
import { DemoComponent } from './demo/demo.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { CustomButtonDirective } from './custom-button.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdFormComponent } from './td-form/td-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestMainComponent,
    HeroComponent,
    DemoComponent,
    ChildComponent,
    ParentComponent,
    CustomButtonDirective,
    TdFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
