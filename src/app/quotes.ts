export class Quotes {
  public showDescription:boolean;
  public upvote:number;
  public downvote:number;
   constructor(public id:number, public name:string, public description:string,public submitDate:Date,  public author:string,){
     this.upvote=0;
     this.downvote=0;

   }
}
