import { Component } from '@angular/core';
import {Quotes} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    quotes = [
      new Quotes(1,'The grass is greener where you water it.','When you want to make your life feel better and your thoughts more positive.',new Date(2018,3,4),'John Doe',0,0 ),
      new Quotes(2,'When you cannot find the sunshine, be the sunshine.','When you’re feeling blue or things are a little flat.',new Date(2018,3,4),'Anonymous',0,0 ),
      new Quotes(3, 'Little by little, day by day, what is meant for you will find its way.','When good things are taking too long to manifest and you’re starting to lose faith.',new Date(2018,3,4), 'John Doe',0,0),
      new Quotes(4, 'Learn from yesterday, live for today, hope for tomorrow.','When you feel like yesterday was a struggle and you want to create better tomorrows.',new Date(2018,3,4),'Anonymous' ,0,0 ),
      new Quotes(5, 'Believe, act as if, live, like you already have it.','When you need a few words of encouragement, support and inspiration.',new Date(2018,3,4),'John Doe',0,0),
    ]
}
