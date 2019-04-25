import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-display-spells',
  templateUrl: './display-spells.component.html',
  styleUrls: ['./display-spells.component.css']
})
export class DisplaySpellsComponent implements OnInit {
name: string = "";
searchValue: string = "";
filterClass: string = "";
filteredByName: Array<any>;
filteredSpells: Array<any>;
spellsB0: Array<any>;
spellsB1: Array<any>;
spellsB2: Array<any>;

spellsC0: Array<any>;
spellsC1: Array<any>;
spellsC2: Array<any>;

spellsD0: Array<any>;
spellsD1: Array<any>;
spellsD2: Array<any>;
classes: String[] = ["Barbarian","Bard", "Cleric", "Druid", "Fighter","Monk", "Paladin", "Ranger", "Rogue", "Sorcerer","Warlock", "Wizard"
];

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
    
  }

  searchByName(){
  //  let value = this.searchValue.toLowerCase();
  let value = this.searchValue;
  if(this.filterClass == '')
  {
    this.firebaseService.searchSpells(value)
  
    .subscribe(result => {
      this.filteredSpells = result;
    })


  }
  // else if (this.filterClass != null) {
  //   this.firebaseService.getClassSpells(this.filterClass)

  //   .subscribe(result => {
  //     this.filteredSpells = result;
  //   })
  // }
}

selectFilter(selectedClass)
{
  this.filterClass = selectedClass;
  
}

  getAll(){
    this.firebaseService.getSpells()
    .subscribe(result => {
       this.spellsB0 = result;
       this.filteredSpells = result;
     //  console.log(this.spellsB0);
      })
      this.firebaseService.getBSpells1()
      .subscribe(result => {
        this.spellsB1 = result;
    //    console.log(this.spellsB1);
    })
    this.firebaseService.getBSpells2()
    .subscribe(result => {
      this.spellsB2 = result;
     // console.log(this.spellsB1);
  })

  this.firebaseService.getCCantrips()
  .subscribe(result => {
     this.spellsC0 = result;
   //  console.log(this.spellsB0);
    })
    this.firebaseService.getCSpells1()
    .subscribe(result => {
      this.spellsC1 = result;
  //    console.log(this.spellsB1);
  })
  this.firebaseService.getCSpells2()
  .subscribe(result => {
    this.spellsC2 = result;
   // console.log(this.spellsB1);
})

this.firebaseService.getDCantrips()
.subscribe(result => {
   this.spellsD0 = result;
 //  console.log(this.spellsB0);
  })
  this.firebaseService.getDSpells1()
  .subscribe(result => {
    this.spellsD1 = result;
//    console.log(this.spellsB1);
})
this.firebaseService.getDSpells2()
.subscribe(result => {
  this.spellsD2 = result;
 // console.log(this.spellsB1);
})



  }}
  
