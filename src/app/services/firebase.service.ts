import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
  })

  export class FirebaseService {

    constructor(public db: AngularFirestore) {}
  
    getUser(userKey){
      return this.db.collection('users').doc(userKey).snapshotChanges();
    }
  
    updateUser(userKey, value){
      value.nameToSearch = value.name.toLowerCase();
      return this.db.collection('users').doc(userKey).set(value);
    }
  
    deleteUser(userKey){
      return this.db.collection('users').doc(userKey).delete();
    }
  
    getUsers(){
      return this.db.collection('users').snapshotChanges();
    }
  
    searchUsers(searchValue){
      return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
        .where('nameToSearch', '<=', searchValue + '\uf8ff'))
        .snapshotChanges()
    }
  
    searchUsersByAge(value){
      return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
    }
  
  
    createUser(value){
      console.log("name is: "+name);
      return this.db.collection('characters').add({
        name: value.name,
       // nameToSearch: value.name.toLowerCase(),
        class: value.classControl,
        level:value.level,
      });
    }
  }