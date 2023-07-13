import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class server {
  ServerUrls: any;
  production: boolean = false;
  development: boolean = true;
  constructor(private http: HttpClient) {
    this.getJonsurl();
  }
  getJonsurl() {
    let url: any = '';
    if (this.development) {
      url = '../../assets/url.json';
    } else {
      url = '../../rdbapp/assets/url.json';
    }
    this.http.get(url, { responseType: 'json' })
      .subscribe((data: any) => {
        console.log('data' + JSON.stringify(data));
        if (data && data.serverEndPoint) {
          console.log('urls' + data.serverEndPoint);
          this.ServerUrls = data.serverEndPoint;
        }
      });

  }
}