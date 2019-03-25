import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote:Quotes;
@Output() isComplete= new EventEmitter<boolean>();
@Output() isPlus=new EventEmitter<boolean>();
@Output() isMinus=new EventEmitter<boolean>();

quotePlus(plus:boolean){
  this.isPlus.emit(plus);
}
quoteMinus(Minus:boolean){
  this.isMinus.emit(Minus);
}

quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
