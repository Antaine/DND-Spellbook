import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-display-spells',
  templateUrl: './display-spells.component.html',
  styleUrls: ['./display-spells.component.css']
})
export class DisplaySpellsComponent implements OnInit {
spellName: string = "";
spells: Array<any>;
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
     //  this.spells = result;
       console.log(this.spells);
    })
}}
