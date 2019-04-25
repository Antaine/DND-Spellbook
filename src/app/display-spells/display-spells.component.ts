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
  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
    
  }

  getData(){
    this.firebaseService.getSpells()
    .subscribe(result => {
       this.spellsB0 = result;
     //  console.log(this.spellsB0);
      })
      this.firebaseService.getbSpells1()
      .subscribe(result => {
        this.spellsB1 = result;
    //    console.log(this.spellsB1);
    })
    this.firebaseService.getbSpells2()
    .subscribe(result => {
      this.spellsB2 = result;
     // console.log(this.spellsB1);
  })

  }}
