import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor() { }

  computeTotal(): number{
    return 90;
  }
}
