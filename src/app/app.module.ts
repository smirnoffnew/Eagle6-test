import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DialogComponent } from './dialog/dialog.component';
import {EntitiesService} from './core/services/entities.service';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DialogComponent
  ],
  imports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    FormsModule,
    MatListModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [EntitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
