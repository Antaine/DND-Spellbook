import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
    providedIn: 'root'
  })

  export class FirebaseService {
    spells: Array<any>;
    constructor(public db: AngularFirestore) {}
  
    getUser(userKey){
      return this.db.collection('characters').doc(userKey).snapshotChanges();
    }
  
    updateUser(userKey, value){
      value.nameToSearch = value.name.toLowerCase();
      return this.db.collection('users').doc(userKey).set(value);
    }
  
    deleteUser(userKey){
      return this.db.collection('users').doc(userKey).delete();
    }
  
    getUsers(){
      return this.db.collection('characters').snapshotChanges();
    }

    getSpells(){
      spells: String;
      return this.db.collection('Spells/BardSpells/Cantrips').snapshotChanges();
    }
    getBCantrips(){
      spells: String;
    return this.db.collection('Spells/BardSpells/Cantrips').snapshotChanges();
    }

    getBSpells1(){
      spells: String;
    return this.db.collection('Spells/BardSpells/Level_1').snapshotChanges();
    }

    getBSpells2(){
      spells: String;
    return this.db.collection('Spells/BardSpells/Level_2').snapshotChanges();
    }

    getCCantrips(){
      spells: String;
    return this.db.collection('Spells/ClericSpells/Cantrips').snapshotChanges();
    }

    getCSpells1(){
      spells: String;
    return this.db.collection('Spells/ClericSpells/Level_1').snapshotChanges();
    }

    getCSpells2(){
      spells: String;
    return this.db.collection('Spells/ClericSpells/Level_2').snapshotChanges();
    }

    getDCantrips(){
      spells: String;
    return this.db.collection('Spells/DruidSpells/Cantrips').snapshotChanges();
    }

    getDSpells1(){
      spells: String;
    return this.db.collection('Spells/DruidSpells/Level_1').snapshotChanges();
    }

    getDSpells2(){
      spells: String;
    return this.db.collection('Spells/DruidSpells/Level_2').snapshotChanges();
    }

    getFilteredSpells(fClass,lvl){
      spells: String;
    return this.db.collection('Spells/'+'fClass'+'/'+'lvl').snapshotChanges();
    }

    getClassSpells(fClass){
      
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Cantrip').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_1').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_2').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_3').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_4').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_5').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_6').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_7').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_8').snapshotChanges());
    // this.spells.push(this.db.collection('Spells/'+'fClass'+'/Level_9').snapshotChanges());
    return this.db.collection;
    }

    getLevelSpells(lvl){
      
      this.spells.push(this.db.collection('Spells/'+'Bard'+'/lvl').snapshotChanges());
      this.spells.push(this.db.collection('Spells/'+'Cleric'+'/lvl').snapshotChanges());
      this.spells.push(this.db.collection('Spells/'+'Druid'+'/lvl').snapshotChanges());
      this.spells.push(this.db.collection('Spells/'+'Paladin'+'lvl').snapshotChanges());
      this.spells.push(this.db.collection('Spells/'+'Ranger'+'lvl').snapshotChanges());
      this.spells.push(this.db.collection('Spells/'+'Sorcerer'+'lvl').snapshotChanges());
      this.spells.push(this.db.collection('Spells/'+'Warlock'+'lvl').snapshotChanges());
      this.spells.push(this.db.collection('Spells/'+'Wizard'+'lvl').snapshotChanges());
      return this.spells;
      }
  
  
    searchSpells(searchValue){

      return this.db.collection('Spells/BardSpells/Cantrips',ref => ref.where('searchName', '>=', searchValue).where('searchName','<=', searchValue + '\uf8ff'))
      .snapshotChanges()

    //   return this.db.collection('Spells/BardSpells/Cantrips',ref => ref.where('searchName', '>=', searchValue)
    // .where('searchName', '<=', searchValue + '\uf8ff')    )
    //     .snapshotChanges()
    }
  
    // searchByLevel(lvl){
    //   return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
    // }
  
  
    createCharacter(value){
      console.log("name is: "+name);
      return this.db.collection('characters').add({
        name: value.name,
       // nameToSearch: value.name.toLowerCase(),
        class: value.classControl,
        level:value.level,
      });
    }
  }