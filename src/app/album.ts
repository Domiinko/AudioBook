export class album
{
  id :  string ;
  picUrl : string ;
  alt : string;

  constructor(id: string, picUrl: string, alt: string)
  {
    this.id = id;
    this.picUrl = picUrl;
    this.alt = alt;
  }

}
