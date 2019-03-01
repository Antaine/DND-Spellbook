import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, AngularFireObject,AngularFireList } from 'angularfire2/database';

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

    
   // constructor(private afStorage: AngularFireStorage) { }

  /*  Spells:AngularFireList<any>;
    constructor(db2: AngularFireDatabase) {
    this.Spells = db2.list('Spells');
          }
  ngOnInit() {}*/
}