import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  CharacterCreateForm: FormGroup;
  classes: String[] = ["Barbarian","Bard", "Cleric", "Druid", "Fighter","Monk", "Paladin", "Ranger", "Rogue", "Sorcerer","Warlock", "Wizard"
    ];
  validation_messages = {
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'class': [
      { type: 'required', message: 'Class is required.' }
    ],
    'level': [
      { type: 'required', message: 'Enter a Level between 1-20' },
    ]
  };

  //Old Stuff
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService  
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.CharacterCreateForm = this.fb.group({
      classControl: ['Bard'],
      name: ['', Validators.required ],
      chClass: ['', Validators.required ],
      level: ['', Validators.required ]
    });
  }

  resetFields(){
    // this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    console.log("resetname is: "+name);
     this.CharacterCreateForm = this.fb.group({
       name: new FormControl('', Validators.required),
       chClass: new FormControl('', Validators.required),
       level: new FormControl('', Validators.required),
     });
   }

   onSubmit(value){
    console.log("submit name is: "+value.name + " Class: " + value.class + " " + " Level: " + value.level);
    this.firebaseService.createUser(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    )
  }
  selectedValue: string;

  /*selectedLvl: Number;
   
    levels: Number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ];*/

  selectedBackground: string;
    backgrounds: String[] = ["Acolyte","Charlatan","Criminal","Entertainer","Folk Hero","Hermit", "Noble", "Outlander","Sage","Sailor","Soldier", "Urchin"
    ];
}