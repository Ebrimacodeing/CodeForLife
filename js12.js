powerUp()  ; //Function called powerUp 

   if(this.powerLevel >=96) { // It is checking if the power level is greater than 96
            this.powerLevel = 100; // Power level at 100
            console.log(`${this.name} power level is full! Special Available!`); // Using console.log this.name to say the power level is full and special available
        }else{ 
            this.powerLevel +=4;
            console.log(`${this.name} power level is now at ${this.powerLevel}%`);
        }
    
