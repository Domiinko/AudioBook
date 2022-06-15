import { Component, OnInit } from '@angular/core';
import { ApiService } from './Service/api.service';
import { Songss } from './Songss';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  // str = 'songs' as string;

  title = 'DomosAudioBookApp';

  constructor(private api : ApiService){}

    /* columns : { [key: string] :any } = ["Songs Id", "picUrl", "alt"];

     index : { [key: string] :any } = ["id", "picUrl", "alt"];*/

    songs : Songss[] = [];

     ngOnInit(): void {
      this.api.getSongss().subscribe
      (
        (response)=>
        {
          this.songs = response;
        }/*,
        (error : any)=>
        {
          console.log("Error Occured : "+error);
        }*/
      )
    }

}


