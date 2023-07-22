import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent {
  constructor(private http: HttpClient, private router: Router) {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((Response) => {
      this.data = Response;
      console.log(this.data);
    })
  }
goToDetail({ arg0 }: { arg0: any; }): void {
throw new Error('Method not implemented.');
}
data: any;

}
