import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DND-Spellbook';
  
  selectedValue: string;
  selectedFruit: string;
  
    colors: String[] = [    "Bard", "Cleric", "Druid", "Fighter", "Paladin", "Ranger", "Rogue(Arcane Tricker Archtype", "Sorcerer","Warlock", "Wizard"
    ];
  
    fruits: String[] = ["Apple", "Orange", "Plum", "Guava", "Banana", "Grapes", "Pineapple"];
}