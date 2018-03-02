import { PlayerInfoComponent } from './player-info/player-info.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: 'list',
        component: PlayerListComponent,
        children: [
            { path: ':playerId/view', component: PlayerInfoComponent },
            { path: ':playerId/edit', component: PlayerEditComponent },
        ]
    },
    { path: '**', redirectTo: 'list', pathMatch: 'full' }
];
