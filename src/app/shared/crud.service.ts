import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database/database.module';
import{Character}from '../shared/character';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
characterRef:AngularFireList<any>;
characterRef2:AngularFireObject<any>;

  constructor(private db:AngularFireDatabase) { }
  
  //Create Character
  AddCharacter(character:Character){
    this.characterRef.push({
      name:character.name,
      level:character.level,
      background:character.background

    })
  }

  //Read Character
  GetCharacter(id:string){
    this.characterRef2 = this.db.object('characters-list/'+id);
    return this.characterRef2;
  }

  //Read Character List
  GetCharacterList(){
    this.characterRef = this.db.list('characters-list');
    return this.characterRef;
  }

  //Update Character
  UpdateCharacter(character:Character){
    this.characterRef2.update({
      name:character.name,
      level:character.level,
      background:character.background
    })
  }

  //Delete User
  DeleteUser(id:string){
    this.characterRef2=this.db.object('characters-list/'+id);
    this.characterRef2.remove();
  }
}
