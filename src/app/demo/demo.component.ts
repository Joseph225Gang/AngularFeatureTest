import { Attribute, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(@Attribute('color') public color:string) { 
    console.log(color);
  }

  ngOnInit(): void {
  }

}
