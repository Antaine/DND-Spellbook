import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  constructor() { }
  selectedValue: string;
  
    classes: String[] = ["Barbarian","Bard", "Cleric", "Druid", "Fighter","Monk", "Paladin", "Ranger", "Rogue", "Sorcerer","Warlock", "Wizard"
    ];

  selectedLvl: Number;
   
    levels: Number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ];

  selectedBackground: string;
    backgrounds: String[] = ["Acolyte","Charlatan","Criminal","Entertainer","Folk Hero","Hermit", "Noble", "Outlander","Sage","Sailor","Soldier", "Urchin"
    ];
   
  ngOnInit() {
  }

}
