import { Component, Input } from '@angular/core';
import { Player } from '../shared/models/player.model';

@Component({
    selector: 'kickit-player-info',
    templateUrl: './player-info.component.html',
    styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent {
    @Input() player: Player;

    constructor() { }
}
