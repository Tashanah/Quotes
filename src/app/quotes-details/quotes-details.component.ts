import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import {Quotes} from '../quotes'
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
  @Input() quote:Quotes;
@Output() isDelete= new EventEmitter<boolean>();




quotedelete(complete:boolean){
    this.isDelete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
