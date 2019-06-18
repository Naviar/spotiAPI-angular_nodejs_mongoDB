import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  data : any [];
  readonly URL_API = "http://localhost:3000/api";

  constructor(private http: HttpClient) {
    console.log('spotify service listo');
   }

  //  getQuery(query: string){
  //    const url = `https://api.spotify.com/v1/${ query }`;

  //    const headers = new HttpHeaders({
  //     'Authorization': 'Bearer BQANHvHU4sieRWGmPJjaosXFW2T7NhbcBcsyQ24HFHDRSJJ7AR2zlB9AROOkR1mMY0Kp5weTtrGD4E8pJVw'
  //    });
  //    return this.http.get(url , { headers });
  //  }

  //  getNewReleases(){
  
  //   return this.getQuery('browse/new-releases?limit=20')
  //   .pipe(map( data => {
  //   return data['albums'].items;
  //   }));
  //  }

  //  getTracks(termino: string){
   
  //   return this.getQuery(`search?query=${termino}&type=artist&market=CO&offset=0&limit=15`)
  //   .pipe(map(data => {
  //   return data['albums'].items;
  //   }));
  //  }

  getTracks(termino : string){
    return this.http.get(`${this.URL_API}/getSearch/${termino}`);
  }
   
}
