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
spellsB0: Array<any>;
spellsB1: Array<any>;
spellsB2: Array<any>;

spellsC0: Array<any>;
spellsC1: Array<any>;
spellsC2: Array<any>;

spellsD0: Array<any>;
spellsD1: Array<any>;
spellsD2: Array<any>;

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAll();
    
  }

  getAll(){
    this.firebaseService.getSpells()
    .subscribe(result => {
       this.spellsB0 = result;
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
