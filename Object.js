class AnimeCharacter {
    constructor(name, hometown, superPower, weakness, health, powerLevel){
    this.name = name;
    this.hometown = hometown;
    this.superPower = superPower;
    this.weakness = weakness;
    this.health = health;
    this.powerLevel = powerLevel;
    this.specialDamage = 50;
    }
}
dodge()}
{
block()}
{
powerUp();}
    {
    if(this.pwoerLevel >= 96){
        this.powerLevel = 100;
        console.log(`${this.name} power level is full! Special Available!`);
    }else{ 
        this.powerLevel += 4;
        console.log(`${this.name} power level is now at ${this.powerLevel}%`);
    }
}
specialAttack(opponent){
    if(this.powerLevel == 100)}
    console.log("Gordon release hyper sonic speed!! 10 minutes remaining!");
    this.powerLevel -= 40;
    opponent.health -= this.specialDamage;
    console.log(`${opponent.name}'s health has been depleted by ${this.specialDamage}! ${opponent.health}%`);{
} else {
    console.log(`Gordon's strength is currently at ${this.powerLevel}. Power up to full strength to unleash your special attack!!`)
 }
}
superPunch(opponent){
    opponent.health -= 20;
    console.log(`You'll regret this decsion${opponent.name}: **** ${opponent.name}'s HEALTH: ${opponent.health}% ****`);
}
lightningbolt(opponent){
    opponent.health -= 10;
    console.log(`Feel the wrath of me ****${opponent.name}'s HEALTH: ${opponent.health}% ****`);