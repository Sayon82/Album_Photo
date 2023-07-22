import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-photo',
  templateUrl: './detail-photo.component.html',
  styleUrls: ['./detail-photo.component.css']
})
export class DetailPhotoComponent {
  data: any;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ){
    this.id = this.route.snapshot.params["Id"];
    this.http.get("https://jsonplaceholder.typicode.com/photos/"+this.id).subscribe((Response) => {
      this.data = Response;
      console.log(this.data);
    })
  }

}
