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
  
    colors: String[] = [    "AliceBlue","Aqua","Black","BlanchedAlmond","Blue","BlueViolet",   
      "Brown","BurlyWood","DarkGreen","DarkKhaki","DarkRed","DarkSalmon","DeepSkyBlue"
    ];
  
    fruits: String[] = ["Apple", "Orange", "Plum", "Guava", "Banana", "Grapes", "Pineapple"];
}