import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DND-Spellbook';
  
  selectedValue: string;
  
    classes: String[] = ["Barbarian","Bard", "Cleric", "Druid", "Fighter","Monk", "Paladin", "Ranger", "Rogue", "Sorcerer","Warlock", "Wizard"
    ];
    bardSpells: String[]=["Vicious Mokery"
    ];
}