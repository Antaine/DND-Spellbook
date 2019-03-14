import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from'@angular/common/http';
import { MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule, MatFormFieldModule, MatSelectModule} from'@angular/material';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database/database.module';
<<<<<<< HEAD
import { app } from 'firebase';

=======
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
>>>>>>> 362694336f8d1d5d9a9a16502335e8a0533cf22e

const appRoutes: Routes = [

  {
    path: 'home',
    component: AppComponent
  },

  {
    path: 'create',
    component: CreateCharacterComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
     // constructor(private afStorage: AngularFireStorage) { }

  /*  Spells:AngularFireList<any>;
    constructor(db2: AngularFireDatabase) {
    this.Spells = db2.list('Spells');
          }
  ngOnInit() {}*/
 }
