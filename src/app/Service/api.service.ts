import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Songss } from '../Songss';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  /*getSongss() {
    throw new Error('Method not implemented.');
  }*/

  constructor(private http : HttpClient) { }

  url : string = "http://localhost:3000/Songss";

  getSongss(){
    return this.http.get<Songss[]>(this.url);
    /*.pipe(map((res:any)=>{
      return res;
    }))*/
  }
}
