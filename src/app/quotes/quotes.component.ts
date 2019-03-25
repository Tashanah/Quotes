import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
      new Quotes(1,'The grass is greener where you water it','When you want to make your life feel better and your thoughts more positive'),
      new Quotes(2,'When you cannot find the sunshine, be the sunshine','When you’re feeling blue or things are a little flat'),
      new Quotes(3, 'Little by little, day by day, what is meant for you will find its way','When good things are taking too long to manifest and you’re starting to lose faith'),
      new Quotes(4, 'Learn from yesterday, live for today, hope for tomorrow','When you feel like yesterday was a struggle and you want to create better tomorrows'),
      new Quotes(5, 'Believe, act as if, live, like you already have it.','When you need a few words of encouragement, support and inspiration'),


  ]

  constructor() { }

  ngOnInit() {
  }

}
