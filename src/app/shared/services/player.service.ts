import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { Player, GenderType } from './../models/player.model';
import { Subject } from 'rxjs/Subject';

interface IPlayer {
    id: number;
    firstName?: string;
    lastName?: string;
    gender?: 0 | 1 | 2;
    emailAddress: string;
}

@Injectable()
export class PlayerService {
    public onSaved: Subject<Player> = new Subject<Player>();

    private url = 'http://localhost:5000/api/players';


    constructor(private http: HttpClient) { }

    public getPlayers(): Observable<Player[]> {
        return this.http.get<IPlayer[]>(this.url).pipe(
            map(iplayers => iplayers.map(iplayer => this.toPlayer(iplayer))
            )).pipe(
                catchError(this.handleError('getPlayers', []))
            );
    }

    public getPlayer(playerId: string): Observable<Player> {
        return this.http.get<IPlayer>(`${this.url}/${playerId}`).pipe(
            map(iplayer => this.toPlayer(iplayer))
        ).pipe(
            catchError(this.handleError('getPlayer', null))
        );
    }


    public savePlayer(updatedPlayer: Player): Observable<Player> {
        return this.http.put<IPlayer>(`${this.url}/${updatedPlayer.Id}`, this.toRequest(updatedPlayer)).pipe(
            map(result => {
                this.onSaved.next(this.toPlayer(result));
                return this.toPlayer(result);
            })
        ).pipe(
            catchError(this.handleError('getPlayer', null))
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

    private toPlayer(iplayer: IPlayer): Player {
        return new Player(
            iplayer.id,
            iplayer.firstName,
            iplayer.lastName,
            this.intToGender(iplayer.gender),
            iplayer.emailAddress
        );
    }

    private toRequest(player: Player): any {
        return {
            'id': player.Id,
            'emailAddress': player.Email,
            'firstName': player.FirstName,
            'lastName': player.LastName,
            'gender': this.GenderToInt(player.Gender),
        };
    }

    private intToGender(raw: number): GenderType {
        let result: GenderType = 'unbekannt';
        switch (raw) {
            case 0:
                result = 'männlich';
                break;
            case 1:
                result = 'weiblich';
                break;
            case 2:
                result = 'unbekannt';
                break;
        }
        return result;
    }

    private GenderToInt(gender: GenderType): number {
        let result = 0;
        switch (gender) {
            case 'männlich':
                result = 0;
                break;
            case 'weiblich':
                result = 1;
                break;
            case 'unbekannt':
                result = 2;
                break;
        }
        return result;
    }


}
