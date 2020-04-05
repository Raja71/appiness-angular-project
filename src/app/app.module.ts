import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UserRepositoriesComponent } from './components/user-repositories/user-repositories.component';
import { OnlineOfflineService } from './services/online-offline.service';
import { GithubBaseService } from './services/github-base.service';
import { GithubUsersService } from './services/github-users.service';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from './pipes';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatSliderModule } from "@angular/material/slider";
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserRepositoriesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    PipesModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSliderModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports:[
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [
    OnlineOfflineService,
    GithubBaseService,
    GithubUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
