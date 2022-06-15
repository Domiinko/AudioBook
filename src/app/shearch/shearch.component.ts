import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shearch',
  templateUrl: './shearch.component.html',
  styleUrls: ['./shearch.component.css']
})
export class ShearchComponent implements OnInit {
  list = [
    {  "id": 1,  },
    {  "id": 2,  },
    {  "id": 3,  },
    {  "id": 4,  },
    {  "id": 5,  },
    {  "id": 6,  },
    {  "id": 7,  },
    {  "id": 8,  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
