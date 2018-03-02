import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PlayerService } from './shared/services/player.service';
import { PlayerEditComponent } from './player-edit/player-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerInfoComponent,
    PlayerEditComponent
  ],
  imports: [
      BrowserModule,
  ],
    providers: [
        PlayerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
