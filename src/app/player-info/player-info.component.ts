import { PlayerService } from './../shared/services/player.service';
import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../shared/models/player.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'kickit-player-info',
    templateUrl: './player-info.component.html',
    styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {
    public player: Player;

    constructor(
        private route: ActivatedRoute,
        private playerService: PlayerService,
    ) { }

    public ngOnInit() {
        this.getPlayer();
    }

    private getPlayer() {
        this.playerService.getPlayer(this.route.snapshot.paramMap.get('playerId'))
            .subscribe(player => {
                this.player = player;
            });
    }
}
