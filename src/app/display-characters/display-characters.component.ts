import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-display-characters',
  templateUrl: './display-characters.component.html',
  styleUrls: ['./display-characters.component.css']
})
export class DisplayCharactersComponent implements OnInit {
  level: number = 0;
  class: string = "";
  characters: Array<any>;
  level_filtered_characters: Array<any>;
  name_filtered_character: Array<any>;
  constructor(
    public firebaseService: FirebaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getUsers()
    .subscribe(result => {
       this.characters = result;
       this.level_filtered_characters = result;
       this.name_filtered_character = result;
    })
  }
  //   viewDetails(item){
  //     this.router.navigate(['/details/'+ item.payload.doc.id]);
  // }
    
}
