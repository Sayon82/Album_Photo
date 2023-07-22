import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent {

  est_connecte: boolean= false;
  prenom: String= "Sayon";
  nom: String= "Traore";
  age: number= 20;
  annee:(number| String)[] = ["Deux mille ving-trois",2023,"deux mille ving-un",2021];
  somme:any[] = ["Un million", 2000000];
  data:any;
  constructor(private http: HttpClient) { 
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(reponse=>{
      this.data=reponse
      console.log(reponse)
    });
  }

}

