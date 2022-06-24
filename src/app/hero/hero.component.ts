import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() msg:string = "";
  @Output() private outer=new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(this.msg);
}

  sendParent(){
    this.outer.emit('msg from child');
  }

  sing()
  {
    alert('sing');
  }
}
