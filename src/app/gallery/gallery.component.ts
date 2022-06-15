import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';
import { Songss } from '../Songss';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

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
