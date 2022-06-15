import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Songss } from '../Songss';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private api : ApiService){}

    songs : Songss[] = [];

     ngOnInit(): void {
      this.api.getSongss().subscribe
      (
        (response)=>
        {
          this.songs = response;
        }
      )
    }

}
