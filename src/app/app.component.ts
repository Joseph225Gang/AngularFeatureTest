import { Component, Inject, Optional, ViewChild } from '@angular/core';
import {HeroComponent } from './hero/hero.component';
import { OrderService} from './order.service';
import { DiscountService} from './discount.service';
import { FormArray, FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:  [OrderService,{
    provide: OrderService,
    useFactory: () => {
      return new Date().getMonth() === 9 ? new OrderService() : new DiscountService()
    }
  }]
})

export class AppComponent {
  title = 'angular-new-tour';
  message = 'Hello, Angular';
  now: Date = new Date();
  readonly condition = new FormControl();
  readonly form = new FormGroup({
    id: new FormControl(),
    password: new FormControl()
  });
  readonly formSecond = new FormGroup({
    Tasks: new FormArray([])
  });
  @ViewChild('appHero') Hero: HeroComponent = new HeroComponent();

  constructor(@Optional() @Inject(OrderService) private service: OrderService)
  {
    alert(service.computeTotal());
  }
  runParent(msg:string){
    　　　alert(msg);
          this.Hero.sing();
  }

    getTasks(): FormArray{
      return this.formSecond.get('Tasks') as FormArray;
  }
    validate() : ValidationErrors | null {
      if(this.form.valid){
        return null;
      }
      return { invalid: true};
    }
}
