import { Player } from './../shared/models/player.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kickit-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
    public selectedPlayer: Player;
    public players: Player[];

    constructor() { }

    ngOnInit() {
        this.players = [
            {
                Id: 'player1',
                Nickname: 'Mario',
                FirstName: 'Masaru',
                LastName: 'Hongō',
                Gender: 'Männlich',
            },
            {
                Id: 'player2',
                Nickname: 'Gregor',
                FirstName: 'Kakeru',
                LastName: 'Daichi',
                Gender: 'Männlich',
            },
            {
                Id: 'player3',
                Nickname: 'Kevin',
                FirstName: 'Kenta',
                LastName: 'Ishii',
                Gender: 'Männlich',
            },
            {
                Id: 'player4',
                Nickname: 'Sascha',
                FirstName: 'Taichi',
                LastName: 'Ōta',
                Gender: 'Männlich',
            },
            {
                Id: 'player5',
                Nickname: 'Tino',
                FirstName: 'Hideo',
                LastName: 'Obata',
                Gender: 'Männlich',
            },
            {
                Id: 'player6',
                Nickname: 'Tommy',
                FirstName: 'Mamoru',
                LastName: 'Ōtaka',
                Gender: 'Männlich',
            }
        ];
    }

    public onSelect(player: Player) {
        this.selectedPlayer = player;
    }
}
