import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roll-stats',
  templateUrl: './roll-stats.component.html',
  styleUrls: ['./roll-stats.component.css']
})
export class RollStatsComponent implements OnInit {

  d6Array = Array<Number>(6);
  constructor() { }

  ngOnInit() {
  }

  RollingStats():any
  {
    var dice;
    var total = 0;
    var diceRolls =[4];
    var i = 0;
    var j = 0;

    for(i=0; i<6; i++)
    {
      for(j=0; j<4; j++)
      {
        dice = Math.floor((Math.random()*6)+1);
        diceRolls[j] = dice;
      }

      this.d6Array[i] = this.GetTotalStat(diceRolls[0], diceRolls[1], diceRolls[2], diceRolls[3]);
      console.log(this.d6Array[i]);
      
    }

  }

  GetTotalStat(result1:Number, result2:Number, result3:Number, result4:Number)
  {
    var total = 0;
    var roll1 = 0;
    var roll2 = 0;
    var roll3 = 0;
    var lowRoll;
    var rolls = [];
    rolls[0]=result1;
    rolls[1]=result2;
    rolls[2]=result3;
    rolls[3]=result4;
    roll1 = rolls[0];
    roll2 = rolls[1];
    roll3 = rolls[2];
    lowRoll = rolls[3];
    
    var replace;

    if(lowRoll > roll1)
    {
      replace = roll1;
      roll1 = rolls[3];
      lowRoll = replace;
    }

    if(lowRoll > roll2)
    {
      replace = roll2;
      roll2 = lowRoll;
      lowRoll = replace;
    }

    if(lowRoll > roll3)
    {
      replace = roll3;
      roll3 = lowRoll;
      lowRoll = replace;
    }

    total = roll1+roll2+roll3;
    return total;

  }

}
