import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { PlayerService } from './shared/services/player.service';


@NgModule({
  declarations: [
    AppComponent,
    PlayerListComponent,
    PlayerInfoComponent
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
