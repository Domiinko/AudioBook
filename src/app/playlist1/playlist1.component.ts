import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Taylor } from '../Taylor';

@Component({
  selector: 'app-playlist1',
  templateUrl: './playlist1.component.html',
  styleUrls: ['./playlist1.component.css']
})
export class Playlist1Component implements OnInit {


  constructor(private api : ApiService){}

  songs : Taylor[] = [];

   ngOnInit(): void {
    this.api.getTaylor().subscribe
    (
      (response)=>
      {
        this.songs = response;
      }
    )
  }

}
