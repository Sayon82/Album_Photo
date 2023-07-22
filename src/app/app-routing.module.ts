import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { VoirComponent } from './voir/voir.component';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';


const routes: Routes = [
  {path:'acceuil',component:AcceuilComponent},
  {path:'contact',component:ContactComponent},
  {path:'inscription',component:InscriptionComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'actualite',component:ActualiteComponent},
  {path:'voir/:id',component:VoirComponent},
  {path:'album',component:AlbumPhotoComponent},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
