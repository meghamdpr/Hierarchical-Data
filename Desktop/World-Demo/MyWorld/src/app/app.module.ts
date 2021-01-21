import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SimplebarAngularModule } from 'simplebar-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { WorldComponent } from './world/world.component';
import { WorldchildrenComponent } from './worldchildren/worldchildren.component';
import {HttpClientModule} from '@angular/common/http';
import { ContinentserviceService } from './continentservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from '@angular/material/list'
import { FlexLayoutModule } from "@angular/flex-layout";
import { ContinentchildrenComponent } from './continentchildren/continentchildren.component';
import { StatesComponent } from './states/states.component';
import { AddregionComponent } from './addregion/addregion.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { DeleteComponent } from './delete/delete.component';

const appRoutes: Routes=[
]

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    WorldchildrenComponent,
    ContinentchildrenComponent,
    StatesComponent,
    AddregionComponent,
    DeleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    FlexLayoutModule,
    SimplebarAngularModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule

  ],
  providers: [ContinentserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
