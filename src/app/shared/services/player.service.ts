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

    constructor() { }

    public getPlayers(): Observable<Player[]> {
        return Observable.create(subscriber => {
            subscriber.next(this.players);
            subscriber.complete();
        }).pipe(
                catchError(this.handleError('getHeroes', []))
            );
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
