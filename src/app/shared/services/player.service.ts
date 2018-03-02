import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Player } from './../models/player.model';

@Injectable()
export class PlayerService {
    private players: Player[] = [
        {
            Id: 'player1',
            Nickname: 'Mario',
            FirstName: 'Masaru',
            LastName: 'Hongō',
            Gender: 'männlich',
        },
        {
            Id: 'player2',
            Nickname: 'Gregor',
            FirstName: 'Kakeru',
            LastName: 'Daichi',
            Gender: 'männlich',
        },
        {
            Id: 'player3',
            Nickname: 'Kevin',
            FirstName: 'Kenta',
            LastName: 'Ishii',
            Gender: 'männlich',
        },
        {
            Id: 'player4',
            Nickname: 'Sascha',
            FirstName: 'Taichi',
            LastName: 'Ōta',
            Gender: 'männlich',
        },
        {
            Id: 'player5',
            Nickname: 'Tino',
            FirstName: 'Hideo',
            LastName: 'Obata',
            Gender: 'männlich',
        },
        {
            Id: 'player6',
            Nickname: 'Tommy',
            FirstName: 'Mamoru',
            LastName: 'Ōtaka',
            Gender: 'männlich',
        }
    ];

    constructor() { }

    public getPlayers(): Observable<Player[]> {
        return Observable.create(subscriber => {
            subscriber.next(this.players);
            subscriber.complete();
        }).pipe(
                catchError(this.handleError('getHeroes', []))
            );
    }

    public savePlayer(updatedPlayer: Player): Observable<Player> {
        return Observable.create(subscriber => {
            const currentPlayer = this.players.find(entry => entry.Id === updatedPlayer.Id);
            if (!!currentPlayer) {
                currentPlayer.LastName = updatedPlayer.LastName;
                currentPlayer.FirstName = updatedPlayer.FirstName;
                currentPlayer.Gender = updatedPlayer.Gender;
            }
            subscriber.next(currentPlayer);
            subscriber.complete(currentPlayer);
        });
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error('operation' + error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // publish the desired failed result
            return Observable.create(subscriber => {
                subscriber.next(result as T);
                subscriber.complete();
            });
        };
    }

}
