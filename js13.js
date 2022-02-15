class Sports {
    constructor(Soccer,Basketball,Football,Golf,Tennis )  {
        this.Soccer = "You play in a competitive match and try to get the ball in the goal";
        this.Basketball = "You get a ball and you try to get it in the hoop";
        this.Football = "You geat an oval ball and play together as a team to get a touchdown for your team";
        this.Golf = "You get a small ball and hit it with a cub and try to get it into a small hole";
        this.Tennis = "A game where your goal is to hit  a ball with a racket making sure it doesnt fall";
    }
 
   Speed(){
       if(this.Soccer >=  11 ){
           this.Soccer = 11;
           console.log(`${this.Soccer} You may take the ball away`);
       } else {
           this.Soccer +=5.9;
           console.log("You Are running slow you may not take the ball");
       }
        }
    }