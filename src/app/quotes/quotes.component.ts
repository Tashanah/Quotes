import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes = [
      new Quotes(1,'The grass is greener where you water it.','When you want to make your life feel better and your thoughts more positive.',new Date(2018,3,4),'John Doe'),
      new Quotes(2,'When you cannot find the sunshine, be the sunshine.','When you’re feeling blue or things are a little flat.',new Date(2018,3,4),'Anonymous' ),
      new Quotes(3, 'Little by little, day by day, what is meant for you will find its way.','When good things are taking too long to manifest and you’re starting to lose faith.',new Date(2018,3,4), 'John Doe'),
      // new Quotes(4, 'Learn from yesterday, live for today, hope for tomorrow.','When you feel like yesterday was a struggle and you want to create better tomorrows.',new Date(2018,3,4),'Anonymous' ),
      // new Quotes(5, 'Believe, act as if, live, like you already have it.','When you need a few words of encouragement, support and inspiration.',new Date(2018,3,4), 'John Doe'),


  ]

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  constructor() { }

  ngOnInit() {}
  addNewQuotes(quotes){
          let quoteLength = this.quotes.length;
          quotes.id=quoteLength+1;
          quotes.submitDate = new Date(quotes.submitDate)
          this.quotes.push(quotes)

      }

      upvotes(index){
        this.quotes[index].upvote+=1;
      }
      downvotes(index){
        this.quotes[index].downvote+=1;
      }

  deleteQuote(isComplete,index){
        if (isComplete){
            let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)

            if(toDelete){
                this.quotes.splice(index,1)


            }
        }

      }
    }
