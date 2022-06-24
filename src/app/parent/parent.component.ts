import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements AfterContentInit {

  @ContentChild(ChildComponent) child: ChildComponent = new ChildComponent();

  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.child.name);
  }

}
