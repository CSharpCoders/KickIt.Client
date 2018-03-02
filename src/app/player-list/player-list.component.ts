import { PlayerService } from './../shared/services/player.service';
import { Player } from './../shared/models/player.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'kickit-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
    public selectedPlayer: Player;
    public players: Player[];
    public edit: boolean;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private playerService: PlayerService
    ) { }

    ngOnInit() {
        this.playerService.getPlayers().subscribe(
            (result: Player[]) => {
                this.players = result;
            }
        );
        this.route.children.forEach((childroute) => {
            childroute.params.subscribe(params => {
                console.log(JSON.stringify(params));
                if (!!params['playerId']) {
                    this.selectedPlayer = this.players.find(player => player.Id === params['playerId']);
                }
            });
        });
    }

    public onSelect(player: Player) {
        if (player !== this.selectedPlayer) {
            this.selectedPlayer = player;
            this.edit = false;
            this.router.navigate(['list', player.Id, 'view']);
        }

    }
}
