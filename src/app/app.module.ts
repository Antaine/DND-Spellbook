import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from'@angular/common/http';
import { MatInputModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule, MatFormFieldModule, MatSelectModule,MatDialogModule} from'@angular/material';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from '@angular/fire/database/database.module';
import { AngularFirestoreModule, FirestoreSettingsToken} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { app } from 'firebase';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';

import { RollStatsComponent } from './roll-stats/roll-stats.component';

import { DisplayCharactersComponent } from './display-characters/display-characters.component';
import { DisplaySpellsComponent } from './display-spells/display-spells.component';


const appRoutes: Routes = [

  {
    path: 'home',
    component: HomepageComponent
  },

  {
    path: 'create',
    component: CreateCharacterComponent
  },

  {
    path: 'roll',
    component: RollStatsComponent
  },

  {
    path: 'displayC',
    component: DisplayCharactersComponent
  },

  {
    path: 'spells',
    component: DisplaySpellsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    CreateCharacterComponent,
    HomepageComponent,
    RollStatsComponent,
    DisplayCharactersComponent,
    DisplaySpellsComponent
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
    ReactiveFormsModule,
    MatDialogModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,

    // AngularFireStorageModule,
    //AngularFireDatabaseModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule {

 }