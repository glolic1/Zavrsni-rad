import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Igrac } from 'src/app/modeli/igrac-model';

@Injectable()
export class IgraciService {
    public API = 'https://localhost:44305/api';
    public USER_API = `${this.API}/igrac`;
    constructor(private http: HttpClient) { }

    public getAll(pageIndex: number, pageSize: number,
        sortActive: string, sortDirection: string): Observable<Array<Igrac>> {

        let url = this.USER_API + "?pageSize=" + pageSize.toString() + "&pageIndex=" + pageIndex.toString()
            + "&sortColumn=" + sortActive + "&sortOrder=" + sortDirection;

        return this.http.get<Array<Igrac>>(url);
    }

    public getAllPlayers(): Observable<Array<Igrac>> {
        let url = 'https://localhost:44305/api/igrac'
        return this.http.get<Array<Igrac>>(url);
    }

    public getAllPlayersFromTeam(id: number): Observable<Array<Igrac>> {
        let url = 'https://localhost:44305/api/igrac/allFromTeam?id=' + id;
        return this.http.get<Array<Igrac>>(url);
    }

    public getCount(): Observable<number> {
        let url = this.USER_API + "/count";
        return this.http.get<number>(url);
    }

    public get(id: number): Observable<Igrac> {
        let url = this.USER_API + '/' + id.toString();

        return this.http.get<Igrac>(url);
    }

    public add(igrac: Igrac): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.post<boolean>(this.USER_API, JSON.stringify(igrac), { headers: headers });

    }
    public delete(id: number): Observable<boolean> {
        let params = new HttpParams();
        params = params.append("id", id.toString());

        return this.http.delete<boolean>(this.USER_API, { params: params });
    }
    public update(igrac: Igrac): Observable<boolean> {
        let headers = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');

        return this.http.put<boolean>(this.USER_API, JSON.stringify(igrac), { headers: headers });

    }
}
