import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  @Input()
  private rating:number = 0

  private stars:boolean[];

  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter()
  
  @Input()
  private readonly:boolean= true;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    this.stars = [];
    for (let i = 1; i<=5; i++){
      this.stars.push(i>this.rating)
    }
  }

  clickStar(i:number){
    if(!this.readonly){
      this.rating = i+1;
      this.ratingChange.emit(this.rating)
    }
    
  }

}
