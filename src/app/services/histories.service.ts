import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

 

@Injectable({

  providedIn: 'root'

})

export class HistoriesService {

 

 

    private baseUrl = 'http://nhsappchna6210.cscidp.net/rdb/api/History';

    httpOptions:any;

    constructor(private http: HttpClient) {}

 

    getHistoryData(hempId: any, selectedOption: string): Observable<any> {

      const apiUrl = `${this.baseUrl}?Employee=${hempId}&param=${selectedOption}`;

      return this.http.get(apiUrl);

    }

 

    // getHistory(hempId:any,selectedOption:string):Observable<any>{

    //   return this.http.get(`http://nhsappchna6210.cscidp.net/rdb/api/History?Employee=1553640&param=Work_Group`,this.httpOptions)

    // }

 

}
