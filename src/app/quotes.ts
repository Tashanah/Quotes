export class Quotes {
  public showDescription:boolean;
   constructor(public id:number, public name:string, public description:string,public submitDate:Date,  public author:string, public upvote:number, public downvote:number){
     this.showDescription=false;

   }
}
