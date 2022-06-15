import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Songss } from '../Songss';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.css']
})
export class ShearchComponent implements OnInit {
  searchText:any;

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
