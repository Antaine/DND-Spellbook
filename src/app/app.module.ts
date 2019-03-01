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


const appRoutes: Routes = [

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
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
