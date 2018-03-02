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

    private playerId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private playerService: PlayerService
    ) { }

    ngOnInit() {
        this.playerService.getPlayers().subscribe(
            (result: Player[]) => {
                this.players = result;
                if (!!this.playerId) {
                    this.selectPlayer(this.playerId);
                }
            }
        );

        this.playerService.onSaved.subscribe((updatedPlayer) => {
            // tslint:disable-next-line:triple-equals
            const currentPlayer = this.players.find(player => player.Id == updatedPlayer.Id);
            if (currentPlayer) {
                currentPlayer.FirstName = updatedPlayer.FirstName;
                currentPlayer.LastName = updatedPlayer.LastName;
            }
        });

        this.route.children.forEach((childroute) => {
            childroute.params.subscribe(params => {
                if (!!params['playerId']) {
                    this.playerId = params['playerId'];
                    if (this.players) {
                        this.selectPlayer(params['playerId']);
                    }
                }
            });
        });
    }

    public onSelect(player: Player) {
        if (player !== this.selectedPlayer) {
            this.selectedPlayer = player;
            this.router.navigate(['list', player.Id, 'view']);
        }

    }

    private selectPlayer(playerId: number) {
        this.selectedPlayer = this.players.find(player => {
            // tslint:disable-next-line:triple-equals
            return player.Id == playerId;
        });
    }
}
