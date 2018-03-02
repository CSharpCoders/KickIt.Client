import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/Observable/of';
import { catchError } from 'rxjs/operators';

import { Player } from './../models/player.model';

@Injectable()
export class PlayerService {
    private url: string;

    constructor(private http: HttpClient) { }

    public getPlayers(): Observable<Player[]> {
        return this.http.get<Player[]>(this.url)
            .pipe(
                catchError(this.handleError('getPlayers', []))
            );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error('operation' + error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
