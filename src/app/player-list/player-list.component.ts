import { Player } from './../shared/models/player.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'kickit-player-list',
    templateUrl: './player-list.component.html',
    styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
    public players: Player[];


    constructor() { }

    ngOnInit() {
        this.players = [
            {
                Id: 'player1',
                Nickname: 'Mario',
                FirstName: 'Masaru',
                LastName: 'Hongō'
            },
            {
                Id: 'player2',
                Nickname: 'Gregor',
                FirstName: 'Kakeru',
                LastName: 'Daichi'
            },
            {
                Id: 'player3',
                Nickname: 'Kevin',
                FirstName: 'Kenta',
                LastName: 'Ishii'
            },
            {
                Id: 'player4',
                Nickname: 'Sascha',
                FirstName: 'Taichi',
                LastName: 'Ōta'
            },
            {
                Id: 'player5',
                Nickname: 'Tino',
                FirstName: 'Hideo',
                LastName: 'Obata'
            },
            {
                Id: 'player6',
                Nickname: 'Tommy',
                FirstName: 'Mamoru',
                LastName: 'Ōtaka'
            }
        ];
    }

}
